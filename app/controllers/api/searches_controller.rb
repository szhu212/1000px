class Api::SearchesController < ApplicationController

    def index
        @pictures = Picture.where("title~* ?", params[:search]).or(Picture.where("description~* ?", params[:search]))

        if @pictures
            render :index
        else
            render json: [`Sorry, we couldn't find anything matching #{params[:search]}`], status: 404
        end
    end
end
