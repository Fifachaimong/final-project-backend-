import db from "../lib/db.js"

export const CreateUserByAdminModel = async(data) => {
    const { name, lastname, email, password, role } = data
    const [result] = await db.query('INSERT INTO users(name, lastname, email, password, role) VALUES(?, ?, ?, ?, ?)', [name, lastname, email, password, role])
    return result
}

export const DeleteUserByID = async (id) => {
    const [result] = await db.query('DELETE FROM users WHERE id = ?', [id])
    return result
}

export const EditUserByIDModel = async (data) => {
    const { id, name, lastname, password, role } = data
    const [result] = await db.query(
        'UPDATE users SET name = COALESCE(?, name), lastname = COALESCE(?, lastname), password = COALESCE(?, password), role = COALESCE(?, role) WHERE id = ?',
        [ name, lastname, password, role, id]
    )
    return result
}