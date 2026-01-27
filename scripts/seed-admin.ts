import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { Pool } from 'pg';

async function seedAdmin() {
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
    });

    const email = 'admin@pdg.com';
    const password = 'admin123'; // Change this after first login!
    const hashedPassword = await bcrypt.hash(password, 10);
    const id = `admin_${Date.now()}`;

    try {
        // Check if admin already exists
        const existing = await pool.query(
            'SELECT id FROM "User" WHERE email = $1',
            [email]
        );

        if (existing.rows.length > 0) {
            console.log('Admin user already exists!');
            return;
        }

        // Create admin user
        await pool.query(
            `INSERT INTO "User" (id, email, password, name, role, "createdAt", "updatedAt")
             VALUES ($1, $2, $3, $4, $5, NOW(), NOW())`,
            [id, email, hashedPassword, 'Administrator', 'ADMIN']
        );

        console.log('✅ Admin user created successfully!');
        console.log('');
        console.log('Login credentials:');
        console.log(`  Email: ${email}`);
        console.log(`  Password: ${password}`);
        console.log('');
        console.log('⚠️  Please change your password after logging in!');
    } catch (error) {
        console.error('Error seeding admin:', error);
    } finally {
        await pool.end();
    }
}

seedAdmin();
