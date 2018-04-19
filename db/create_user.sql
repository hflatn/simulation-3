Insert into userbase (user_id)
Values ($1)
where $1 != user_id
returning *