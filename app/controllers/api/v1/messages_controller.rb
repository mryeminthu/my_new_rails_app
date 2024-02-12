class Api::V1::MessagesController < ApplicationController
  def greeting
    render json: Message.order('RANDOM()').first&.content
  end
end
