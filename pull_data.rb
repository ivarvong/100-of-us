require 'open-uri'
require 'csv'
require 'json'

url = 'https://docs.google.com/spreadsheet/pub?key=0As1Yq-MxSBt2dG5XOTdkWVYwSkg2R1k1S0YxdHdrb2c&output=csv'

records = []

# need to get this from ASCII-8BIT to UTF-8 otherwise it'll explode
# http://stackoverflow.com/questions/4867883/convert-non-ascii-chars-from-ascii-8bit-to-utf-8
data = open(url).read.force_encoding('utf-8').encode

CSV.parse(data, headers: :first_row) do |row|
  if !row['file'].nil? and !row['name'].nil? and !row['hear'].nil?
  	records << {
  		file: row['file'], 
  		name: row['name'],
  		hear: row['hear'],
  		say: row['say']
  	}
  end
end

File.open("./data.js", "w") do |f|
	f.puts "bootstrap_data(#{records.to_json});"
end
