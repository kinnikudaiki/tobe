class AddDreamToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :dream, :string
  end
end
