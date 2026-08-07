import db from "../lib/db.js"

export const CreateUserByAdminModel = async(data) => {
    const { firtname, lastname, email, password, role } = data
    const [result] = await db.query('INSERT INTO users(firtname, lastname, email, password, role) VALUES(?, ?, ?, ?, ?)', [firtname, lastname, email, password, role])
    return result
}

export const DeleteUserByID = async (id) => {
    const [result] = await db.query('DELETE FROM users WHERE id = ?', [id])
    return result
}

export const EditUserByIDModel = async (data) => {
    const { id, firtname, lastname, password, role } = data
    const [result] = await db.query(
        'UPDATE users SET firtname = COALESCE(?, firtname), lastname = COALESCE(?, lastname), password = COALESCE(?, password), role = COALESCE(?, role) WHERE id = ?',
        [ firtname, lastname, password, role, id]
    )
    return result
}