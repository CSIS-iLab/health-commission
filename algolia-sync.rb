#!/usr/bin/env ruby

require 'json'
require 'algoliasearch'
require "net/http"
require "uri"

uri = URI.parse("https://csis-health-commission.netlify.com/posts.json")

http = Net::HTTP.new(uri.host, uri.port)
request = Net::HTTP::Get.new(uri.request_uri)

response = http.request(request)

current_algolia = JSON.parse(File.read('_site/posts.json'))
old_algolia = JSON.parse(response.body)

current_hash = current_algolia.map{ |x| [x['objectID'], x] }.to_h
old_hash = old_algolia.map{ |x| [x['objectID'], x] }.to_h

update_records = []
current_hash.each do |id, record|
  if current_hash[id] != old_hash[id]
    puts "ALGOLIA UPDATE: \"#{record['title']}\""
    update_records.push(record)
  end
end

delete_records = []
old_hash.each do |id, record|
  if !current_hash.include?(id)
    puts "ALGOLIA DELETE: \"#{record['title']}\""
    delete_records.push(id)
  end
end

Algolia.init :application_id => ENV['ALGOLIA_APP_KEY'], :api_key => ENV['ALGOLIA_API_KEY']
index = Algolia::Index.new(ENV['ALGOLIA_INDEX'])
index.add_objects(update_records)
index.delete_objects(delete_records)