import db from "../lib/db.js";

export const CreateUser = async(data) => {
    const { name, lastname, email, password, role } = data
    const [result] = await db.query('INSERT INTO users(name, lastname, email, password, role) VALUES(?, ?, ?, ?, ?)', [name, lastname, email, password, role])
    return result
}

export const GetUserByEmail = async(email) => {
    const [result] = await db.query('SELECT id, role, password FROM users WHERE email = ?', [email])
    return result[0]
}

export const GetUserByID = async(id) => {
    const [result] = await db.query('SELECT id FROM users WHERE id = ?', [id])
    return result
}

export const GetPostModel = async() => {
    const [result] = await db.query(
        'SELECT posts.title, posts.owner_id, posts.faculty, posts.description, posts.deadline, users.name, users.lastname FROM posts JOIN users ON posts.owner_id = users.id'
    )

    return result
}

export const GetMemberByUserAndPost = async (userId, postId) => {
    const [result] = await db.query(
        'SELECT id FROM members WHERE user_id = ? AND post_id = ?',
        [userId, postId]
    )

    return result[0];
}


export const CreateMember = async (userId, postId) => {
    const [result] = await db.query(
        "INSERT INTO members(user_id, post_id, status) VALUES(?, ?, 'pending')",
        [userId, Number(postId)]
    )
    
    return result;
}


export const CreateResume = async (memberId, resumeUrl, transcriptUrl, aiScore, aiAnalysis)=>{
    const [result] = await db.query(`
        INSERT INTO resume
        (member_id, resume_url, transcript_url, ai_score, ai_analysis)
        VALUES(? ,? ,? ,? ,?)   
        `,
        [ memberId, resumeUrl, transcriptUrl, aiScore, aiAnalysis ]
    );

    return result;
}

export const EditMyProfileModel = async (id, data) => {
    const { name, lastname, phone } = data
    const [result] = await db.query(`
        UPDATE users 
        SET name = COALESCE(?, name), lastname = COALESCE(?, lastname), 
            phone = COALESCE(?, phone)
        WHERE id = ?
        `,[ name, lastname, phone, id ]
    )

    return result
}

export const GetMyProfileModel = async (id) => {
    const [result] = await db.query(
        `SELECT id, name, lastname, email, phone FROM users WHERE id = ?`,
        [id]
    )

    return result[0]
}
