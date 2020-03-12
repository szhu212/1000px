class Picture < ApplicationRecord

    validates :title, :description, presence: true

    has_one_attached :picture

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

end
