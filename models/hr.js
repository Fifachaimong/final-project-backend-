import db from "../lib/db.js"

export const CreatePostModel = async(id, data) => {
    const { title, faculty, description, deadline } = data
    const [result] = await db.query(
        'INSERT INTO posts(owner_id, title, faculty, description, deadline) VALUES(?, ?, ?, ?, ?)',
        [id, title, faculty, description, deadline]
    )
    
    return result
}

export const EditPostModel = async(data, owner_id) => {
    const { id, title, faculty, description, deadline } = data
    const [result] = await db.query(`
        UPDATE posts 
        SET title = COALESCE(?, title), faculty = COALESCE(?, faculty), description = COALESCE(?, description), 
            deadline = COALESCE(?, deadline) 
        WHERE id = ? AND owner_id = ?`,
        [ title, faculty, description, deadline, id, owner_id ]
    )

    return result
}

export const DeletePostModel = async(id, title) => {
    const [result] = await db.query('DELETE FROM posts WHERE owner_id = ? AND title = ?', [id, title])
    
    return result
}

export const GetMemberModel = async(owner_id) => {
    const [result] = await db.query(`
        SELECT p.id AS Post_id , u.name AS user_name, u.lastname AS user_lastname 
        FROM posts p 
        JOIN members m ON m.post_id = p.id
        JOIN users u ON m.user_id = u.id
        WHERE p.owner_id = ?
    `, 
    [Number(owner_id)])

    return result
}

export const GetProfileByMemberModel = async(member_id, owner_id) => {
    const [result] = await db.query(`
        SELECT u.id AS user_id , u.name AS user_name, u.lastname AS user_lastname, u.email AS user_email, u.phone AS user_phone
        FROM posts p 
        JOIN members m ON m.post_id = p.id
        JOIN users u ON m.user_id = u.id
        WHERE u.id = ? AND p.owner_id = ?
        `,
        [member_id, owner_id]
    )

    return result[0]
}