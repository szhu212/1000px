if @pictures
    @pictures.each do |picture|
        json.set! picture.id do 
            json.partial! 'api/searches/search', picture: picture
        end 
    end
end
