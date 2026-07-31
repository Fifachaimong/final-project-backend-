# AI Resume Screening System

ระบบเว็บสำหรับจัดการกระบวนการรับสมัครงาน โดยมีระบบ AI ช่วยวิเคราะห์และประเมิน Resume

รองรับการใช้งานหลาย Role ได้แก่ Admin, Human Resources (HR) และ Applicant

พัฒนาด้วย Node.js และ Express.js โดยออกแบบ Backend ให้มีการแยกส่วนการทำงานเป็น Layer ได้แก่ Routes, Controllers, Services และ Database เพื่อให้แต่ละส่วนมีหน้าที่ชัดเจนและง่ายต่อการพัฒนาต่อ


## Features

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


# System Roles

ระบบรองรับการทำงาน 3 ระดับ ได้แก่

| Role | Description |
|---|---|
| Admin | จัดการข้อมูลผู้ใช้งานและดูแลระบบ |
| HR | จัดการประกาศงาน ตรวจสอบผู้สมัคร และพิจารณาผลสมัคร |
| Applicant | สมัครงาน อัปโหลด Resume และติดตามผลการประเมิน |


# Backend Structure

ระบบ Backend แบ่งการทำงานออกเป็นส่วนต่าง ๆ เพื่อแยกหน้าที่ของแต่ละส่วน

```text
src/
├── controllers/
├── routes/
├── services/
├── models/
├── middleware/
├── config/
├── utils/
└── lib/
