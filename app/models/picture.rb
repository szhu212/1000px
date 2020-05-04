class Picture < ApplicationRecord

    validates :title, :description, presence: true

    has_one_attached :picture

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
    
    has_many :likes,
        foreign_key: :picture_id,
        class_name: :Like

    has_many :likers,
        through: :likes,
        source: :liker

end
