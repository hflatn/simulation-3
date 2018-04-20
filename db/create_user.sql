Insert into userbase (user_id, first_name, profile_picture)
Values ( $1, $2, $3 )
returning *