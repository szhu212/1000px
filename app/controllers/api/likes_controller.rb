class Api::LikesController < ApplicationController

    def create
        @like = Like.new(like_params)
        @like[:liker_id] = current_user.id
        if @like.save
            render json: @like
        else
            render json: @like.errors.full_messages, status: 422
    end

    def destroy 
        @like = Like.find_by({liker_id: current_user.id, picture_id: params[:id]})
        if @like
            @like.destroy 
            render json: @like
        end
    end

    private
    
    def like_params
        params.require(:like).permit(:picture_id)
    end
end
