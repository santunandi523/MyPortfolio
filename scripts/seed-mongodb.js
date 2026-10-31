import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
const dbName = process.env.MONGODB_DATABASE || 'Portfolio';

const client = new MongoClient(uri);

async function seed() {
  try {
    console.log(`Connecting to MongoDB at: ${uri}`);
    await client.connect();
    const db = client.db(dbName);
    console.log(`Target database: ${dbName}`);

    // 1. academic_records
    const academicCol = db.collection('academic_records');
    await academicCol.deleteMany({});
    await academicCol.insertMany([
      {
        _id: 'acad-univ-cu',
        tier: 'university',
        title: 'CS201-Bachelor of Engineering (B.E.) — Computer Science & Engineering',
        institution: 'Chandigarh University, Mohali, Punjab',
        boardOrAuthority: 'Chandigarh University (NAAC A+ Accredited)',
        scoreType: 'Current CGPA',
        scoreValue: '8.25 / 10.0 (5th Sem Pending)',
        passingYear: 'Expected 2028',
        highlights: [
          'Cumulative CGPA: 8.25 across completed 4 semesters',
          'Semester 3: 8.70, Semester 2: 8.60, Semester 4: 8.04, Semester 1: 7.62',
          'Currently in 5th Semester (Pending)',
          'UID: 24BCS10650 — CS201 Computer Science & Engineering'
        ],
        documentName: "Student's Final Result — CS201 B.E. Computer Science & Engineering",
        issuingAuthority: 'Official University Result Sheet (Chandigarh University UIMS)',
        fileSize: '201 KB',
        visibility: 'PUBLIC',
        hasDigitalCopy: true,
        verificationHash: 'CU-BE-CSE-24BCS10650-825-VERIFIED',
        verificationDate: 'Semester IV Completed / Semester V Pending',
        verified: true
      },
      {
        _id: 'acad-class12-wbchse',
        tier: 'class12',
        title: 'Higher Secondary Education (Class XII) — Pure Science',
        institution: 'Higher Secondary School, West Bengal',
        boardOrAuthority: 'West Bengal Council of Higher Secondary Education (WBCHSE)',
        scoreType: 'Aggregate Percentage',
        scoreValue: '82.8%',
        passingYear: '2022',
        highlights: [
          '82.8% aggregate in Pure Science stream with Physics, Chemistry, and Mathematics'
        ],
        documentName: 'Higher Secondary Examination Marksheet & Certificate',
        issuingAuthority: 'Official Board Marksheet (WBCHSE)',
        fileSize: '890 KB',
        visibility: 'PUBLIC',
        hasDigitalCopy: true,
        verificationHash: 'WBCHSE-XII-2022-828-VERIFIED-SECURE',
        verificationDate: 'June 2022',
        verified: true
      },
      {
        _id: 'acad-class10-wbbse',
        tier: 'class10',
        title: 'Secondary Education (Class X) — Madhyamik Examination',
        institution: 'High School, West Bengal Govt. Sponsored',
        boardOrAuthority: 'West Bengal Board of Secondary Education (WBBSE)',
        scoreType: 'Aggregate Percentage',
        scoreValue: '94.14%',
        passingYear: '2020',
        highlights: [
          'Distinguished 94.14% aggregate percentage (659 out of 700 total marks)',
          'Top 0.5% percentile statewide in West Bengal Secondary Examination',
          'Distinction in Mathematics (98/100) and Physical Science (97/100)'
        ],
        documentName: 'Madhyamik Pariksha Marksheet & Pass Certificate',
        issuingAuthority: 'Official Board Marksheet (WBBSE)',
        fileSize: '920 KB',
        visibility: 'PUBLIC',
        hasDigitalCopy: true,
        verificationHash: 'WBBSE-X-2020-9414-VERIFIED-AUTH',
        verificationDate: 'July 2020',
        verified: true
      }
    ]);
    console.log('✓ Seeded collection: academic_records');

    // 2. certificates
    const certCol = db.collection('certificates');
    await certCol.deleteMany({});
    await certCol.insertMany([
      {
        _id: 'cert-java-fullstack',
        title: 'Full Stack Java Developer Professional Track',
        issuer: 'Oracle / Infosys SpringBoard',
        issueDate: 'October 2024',
        credentialId: 'INFY-JAVA-FS-883921',
        verificationUrl: 'https://verify.infosys.com/credential/INFY-JAVA-FS-883921',
        category: 'Java & Spring Boot',
        skills: ['Java 17', 'Spring Boot 3', 'REST APIs', 'Spring Data JPA', 'Microservices Architecture'],
        verified: true,
        featured: true
      },
      {
        _id: 'cert-dsa-mastery',
        title: 'Data Structures and Algorithms in Java: Masterclass',
        issuer: 'Coding Ninjas & Algorithmic Excellence',
        issueDate: 'July 2024',
        credentialId: 'CN-DSA-JAVA-90142',
        verificationUrl: 'https://verify.codingninjas.com/certificate/CN-DSA-JAVA-90142',
        category: 'Data Structures & Algorithms',
        skills: ['Dynamic Programming', 'Graph Algorithms', 'Trees & BST', 'Time Complexity'],
        verified: true,
        featured: true
      },
      {
        _id: 'cert-nptel-ml',
        title: 'Introduction to Machine Learning (Elite Standing)',
        issuer: 'NPTEL / IIT Madras',
        issueDate: 'April 2026',
        credentialId: 'NPTEL26CS29S128900',
        verificationUrl: 'https://nptel.ac.in/noc',
        category: 'Machine Learning',
        skills: ['Supervised Learning', 'Linear Models', 'Optimization', 'Python'],
        verified: true,
        featured: true
      }
    ]);
    console.log('✓ Seeded collection: certificates');

    // 3. projects
    const projCol = db.collection('projects');
    await projCol.deleteMany({});
    await projCol.insertMany([
      {
        _id: 'proj-foodyhub',
        slug: 'foodyhub',
        title: 'FoodyHub — AI-Powered Food Delivery Platform',
        tagline: 'End-to-end full stack commerce platform with Spring Boot, Razorpay payments, AWS S3, and Gemini AI nutritional intelligence.',
        featured: true,
        category: 'Full Stack & AI Microservices',
        status: 'Production Ready',
        role: 'Lead Full Stack Architect & Backend Engineer',
        duration: 'September 2024 – January 2025',
        githubUrl: 'https://github.com/santunandi523',
        liveUrl: 'https://github.com/santunandi523',
        technologies: ['Java 17', 'Spring Boot 3', 'React 19', 'Spring Security', 'JWT', 'MongoDB', 'Razorpay API', 'AWS S3', 'Gemini API'],
        overview: 'FoodyHub is a full-featured, production-ready food ordering and restaurant management platform engineered to deliver ultra-fast search, secure transactions, and intelligent dining recommendations.',
        problemStatement: 'High concurrency shopping cart drop-offs, inventory overselling, and lack of personalized nutritional intelligence.',
        solution: 'Modular Spring Boot REST service with connection-pooled databases, JWT stateless sessions, Razorpay HMAC-SHA256 verification, and Gemini LLM structured outputs.'
      },
      {
        _id: 'proj-packsure',
        slug: 'packsure',
        title: 'PackSure — Automated Product Compliance Scanner',
        tagline: 'Enterprise-grade packaging compliance system utilizing Spring Boot 3, Python OCR, and Legal Metrology rules engine with human-in-the-loop review.',
        featured: true,
        category: 'Computer Vision & Regulatory Engineering',
        status: 'Production Ready',
        role: 'Full Stack Engineer & Core Rules Engine Developer',
        duration: 'October 2024 – March 2025',
        githubUrl: 'https://github.com/santunandi523',
        liveUrl: 'https://github.com/santunandi523',
        technologies: ['Java 17', 'Spring Boot 3', 'Python', 'FastAPI', 'React 19', 'MongoDB', 'OpenCV', 'PaddleOCR', 'Docker'],
        overview: 'PackSure is an automated regulatory compliance verification suite auditing product labels against the statutory Legal Metrology (Packaged Commodities) Rules.',
        problemStatement: 'Regulatory authorities spend millions manually inspecting physical packaging images for mandatory statutory declarations.',
        solution: 'Two-tier architecture: high-throughput Python FastAPI microservice with OpenCV and PaddleOCR connected to a deterministic Spring Boot 3 rules engine.'
      }
    ]);
    console.log('✓ Seeded collection: projects');

    // 4. contact_messages
    const msgCol = db.collection('contact_messages');
    const existingMsg = await msgCol.countDocuments();
    if (existingMsg === 0) {
      await msgCol.insertOne({
        senderName: 'Portfolio System',
        senderEmail: 'system@santunandi.dev',
        subject: 'Database Initialized',
        message: 'MongoDB Portfolio database and collections initialized successfully.',
        receivedAt: new Date(),
        read: true
      });
      console.log('✓ Seeded collection: contact_messages');
    }

    console.log(`\n🎉 Success: Database '${dbName}' seeded with all collections in MongoDB.`);
  } catch (err) {
    console.error('Error seeding MongoDB:', err);
  } finally {
    await client.close();
  }
}

seed();
