class Like < ApplicationRecord

    validates :picture_id, :liker_id, presence: true

    belongs_to :picture,
        foreign_key: :picture_id,
        class_name: :Picture

    belongs_to :liker,
        foreign_key: :liker_id,
        class_name: :User
end
