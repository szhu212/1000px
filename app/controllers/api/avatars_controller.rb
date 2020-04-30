class Api::AvatarsController < ApplicationController

    def create
        # debugger
        @user = current_user 
        @user.avatar.purge
        if @user.id == params[:user_id].to_i
            @user.avatar.attach(params[:avatar])
            render 'api/users/show'
        else
            render json:['Illegal avatar change request'], status: 404
        end
    end

    def update
        @user = current_user 
        @user.avatar.purge
        @user.avatar.attach(params[:avatar])
    end
end
