class Picture < ApplicationRecord

    validates :title, :description, presence: true
    # validate :ensure_picture

    has_one_attached :picture

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User


    # def ensure_picture
    #     # puts errors
    #     # debugger
    #     unless self.picture.attached?
    #         errors[:picture] << 'Please attach an image'
    #     end
    # end

end
