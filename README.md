# AI Resume Screening System

ระบบเว็บสำหรับจัดการกระบวนการรับสมัครงาน โดยมีระบบ AI ช่วยวิเคราะห์และประเมิน Resume

รองรับการใช้งานหลาย Role ได้แก่ Admin, Human Resources (HR) และ Applicant

พัฒนาด้วย Node.js และ Express.js โดยออกแบบ Backend ให้มีการแยกส่วนการทำงานเป็น Layer ได้แก่ Routes, Controllers, Services และ Models เพื่อให้แต่ละส่วนมีหน้าที่ชัดเจนและง่ายต่อการพัฒนาต่อ

---

# Features

## Admin

- สามารถเข้าสู่ระบบเพื่อจัดการระบบ
- สามารถเพิ่ม แก้ไข และลบข้อมูลผู้ใช้งานภายในระบบ

## Human Resources (HR)

- สามารถสมัครสมาชิกและเข้าสู่ระบบ
- สามารถสร้าง แก้ไข และลบประกาศรับสมัครงานของตนเอง
- สามารถดูรายชื่อผู้สมัครงานที่ส่ง Resume เข้ามา
- สามารถดูชื่อและคะแนนการประเมิน Resume ของผู้สมัคร
- สามารถเข้าดูข้อมูลส่วนตัวของผู้สมัครงาน
- สามารถตรวจสอบผลการวิเคราะห์ Resume จากระบบ AI
- สามารถพิจารณาผลการสมัครงานเป็น "ผ่าน" หรือ "ไม่ผ่าน"

## Applicant

- สามารถสมัครสมาชิกและเข้าสู่ระบบ
- สามารถดูและแก้ไขข้อมูลส่วนตัวของตนเอง
- สามารถดูประกาศรับสมัครงานที่เปิดรับในระบบ
- สามารถอัปโหลด Resume เพื่อสมัครงาน
- สามารถตรวจสอบคะแนนและผลการประเมิน Resume จากระบบ AI

---

# AI Resume Screening

ระบบมีความสามารถในการช่วยวิเคราะห์ Resume ของผู้สมัครงาน เพื่อช่วยให้ HR สามารถประเมินและพิจารณาผู้สมัครได้ง่ายขึ้น

ความสามารถหลัก:

- รับ Resume จาก Applicant
- วิเคราะห์ข้อมูลจาก Resume
- ประเมินคะแนน Resume
- แสดงผลการวิเคราะห์ให้ HR และ Applicant ตรวจสอบ

---

# Tech Stack

## Backend

- Node.js
- Express.js

## Database

- MySQL

## Security & Middleware

- JWT Authentication
- bcrypt Password Hashing
- CORS
- Morgan HTTP Request Logger

## Tools

- Git
- GitHub
- Postman

---

# System Roles

ระบบรองรับการทำงาน 3 ระดับ ได้แก่

| Role | Description |
| --- | --- |
| Admin | จัดการข้อมูลผู้ใช้งานและดูแลระบบ |
| HR | จัดการประกาศงาน ตรวจสอบผู้สมัคร และพิจารณาผลสมัคร |
| Applicant | สมัครงาน อัปโหลด Resume และติดตามผลการประเมิน |

---

# Backend Structure

ระบบ Backend แบ่งการทำงานออกเป็นส่วนต่าง ๆ เพื่อแยกหน้าที่ของแต่ละส่วน

```
final-project-backend/

├── config/
│
├── controller/
│
├── routes/
│
├── service/
│
├── models/
│
├── middleware/
│
├── schema/ # Validation schemas
│
├── utils/
│
├── lib/
│
└── server.js
```

---

# Installation

## Clone repository

```bash
git clone <repository-url>

cd final-project-backend
```

## Install dependencies

```bash
npm install
```

---

# Environment Setup

สร้างไฟล์ `.env` โดยใช้ค่าจาก `.env.example`

```bash
cp .env.example .env
```

จากนั้นกำหนดค่า Environment Variables สำหรับระบบ เช่น Database Connection และ JWT Secret

---

# Database Setup

ระบบใช้ MySQL เป็น Database

## Initialize Database

สามารถสร้าง Database และ Table Structure ได้จากไฟล์ `schema.sql`

```bash
mysql -u root -p < schema.sql
```

หรือ Import ผ่าน MySQL Client:

```sql
SOURCE schema.sql;
```

Database Structure ประกอบด้วย Table หลัก:

| Table | Description |
| --- | --- |
| users | จัดเก็บข้อมูลผู้ใช้งานและ Role |
| posts | จัดเก็บประกาศรับสมัครงาน |
| members | จัดเก็บข้อมูลผู้สมัครในแต่ละประกาศ |
| resume | จัดเก็บ Resume และผลการวิเคราะห์ AI |

---

# Database Relationship

Database หลักประกอบด้วย Table:

- `users`: จัดเก็บข้อมูลผู้ใช้งานและ Role
- `posts`: จัดเก็บประกาศรับสมัครงาน โดยเชื่อมกับ HR ที่เป็นเจ้าของประกาศ
- `members`: จัดเก็บข้อมูลการสมัครงานของ Applicant และเชื่อมระหว่าง User กับ Post
- `resume`: จัดเก็บ Resume และผลการวิเคราะห์ AI ของผู้สมัคร

Relationship:

```text
users
 |
 ├── posts
 |
 └── members
        |
        └── resume
```

---

# Run Project

## Development

```bash
npm run dev
```

## Production

```bash
npm start
```

---

# Authentication & Security

ระบบมีการจัดการ Authentication และ Security ดังนี้

- JWT ใช้สำหรับ Authentication
- bcrypt ใช้สำหรับ Hash Password
- Role-Based Access Control สำหรับจัดการสิทธิ์ของ Admin, HR และ Applicant

---

# API Overview

ระบบ REST API รองรับการทำงานหลัก ได้แก่

- Authentication
- User Management
- Job Post Management
- Resume Submission
- Resume Evaluation

สามารถทดสอบ API ได้ผ่าน Postman

---

# Dependencies

Package หลักที่ใช้ในระบบ:

- express
- cors
- morgan
- bcrypt
- jsonwebtoken
- mysql2
- dotenv

---

# API Testing

ใช้ Postman สำหรับทดสอบ REST API
