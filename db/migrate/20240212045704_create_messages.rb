class CreateMessages < ActiveRecord::Migration[7.1]
  def change
    create_table :messages do |t|
      t.string :content

      t.timestamps
    end

    greetings = ['Hello there!', 'Hi, friend!', 'Hi there!', 'Good morning!', 'Good day!']
    greetings.each do |greeting|
      Message.create(content: greeting)
    end
  end
end