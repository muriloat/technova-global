# TechNova Global - Enterprise Technology Consulting Website

A professional, sophisticated website for TechNova Global, a consulting company specializing in AI, Blockchain, IoT, and custom technology development.

## Features

- **Modern Design**: Dark premium aesthetic with teal gradients and professional typography
- **Role-Based Authentication**: Three permission levels (admin, employee, customer)
- **Career Portal**: Job listings with application functionality
- **Partner Showcase**: Display of 12+ technology partner logos
- **Contact System**: Form submissions stored in database
- **Centralized Configuration**: Easy content management through a single config file
- **Responsive Design**: Mobile-first approach with optimized navigation

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Radix UI, shadcn/ui
- **Backend**: Node.js, Express.js, TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Express-session with bcrypt password hashing
- **Build Tool**: Vite

---

## Deployment Guide

### Option 1: Deploy on Replit (Recommended)

1. **Fork or Import Project**
   - Click the "Fork" button on Replit, or
   - Import from GitHub using the repository URL

2. **Set Up Database**
   - Replit automatically provisions a PostgreSQL database
   - The `DATABASE_URL` environment variable is set automatically

3. **Configure Environment Variables**
   - Replit handles this automatically for built-in integrations
   - For custom secrets, use the Secrets tab in Replit

4. **Deploy**
   - Click the "Deploy" button in Replit
   - Choose your deployment type (Reserved VM recommended for production)
   - Replit handles SSL, domains, and hosting automatically

5. **Custom Domain (Optional)**
   - Go to the Deployments tab
   - Add your custom domain
   - Update DNS records as instructed

### Option 2: Deploy on Other Platforms

#### Prerequisites
- Node.js 18+ installed
- PostgreSQL database
- npm or yarn package manager

#### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/technova-global.git
   cd technova-global
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Environment Variables**
   Create a `.env` file with:
   ```env
   DATABASE_URL=postgresql://user:password@host:5432/database
   SESSION_SECRET=your-secure-session-secret-min-32-chars
   NODE_ENV=production
   ```

4. **Initialize Database**
   ```bash
   npm run db:push
   ```

5. **Build the Application**
   ```bash
   npm run build
   ```

6. **Start Production Server**
   ```bash
   npm start
   ```

7. **Configure Reverse Proxy (Nginx Example)**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

---

## Content Management

All website content is centralized in `client/src/lib/siteConfig.ts` for easy customization without touching multiple files.

### Changing Company Information

```typescript
// client/src/lib/siteConfig.ts
export const companyInfo = {
  name: "Your Company Name",        // Updates header, footer, copyright
  tagline: "Your Tagline",          // Hero section tagline
  description: "Company description" // Footer and SEO
};
```

### Changing Navigation

```typescript
export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  // Add or remove navigation items
];
```

### Changing Hero Carousel

```typescript
export const heroSlides = [
  {
    title: "Slide Title",
    subtitle: "Slide Subtitle",
    description: "Slide description text",
    image: "https://your-image-url.jpg",  // Replace with your image URLs
    cta: { text: "Button Text", href: "/page" }
  },
  // Add more slides...
];
```

### Changing Services

```typescript
export const services = [
  {
    icon: "Brain",  // Lucide icon name
    title: "Service Name",
    description: "Service description",
    features: ["Feature 1", "Feature 2"]
  },
  // Add more services...
];
```

### Changing Team/Leadership

```typescript
export const leadership = [
  {
    name: "Person Name",
    role: "Job Title",
    image: "https://photo-url.jpg",  // Replace with actual photos
    bio: "Short bio"
  },
  // Add more team members...
];
```

### Changing Contact Information

```typescript
export const contactInfo = {
  email: "contact@yourcompany.com",
  phone: "+1 (555) 123-4567",
  addresses: [
    {
      name: "Headquarters",
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
      country: "USA"
    }
  ]
};
```

### Changing Partner Logos

```typescript
export const partners = [
  { name: "Partner Name", logo: "https://logo-url.svg" },
  // Add more partners...
];
```

---

## Maintenance Guide

### Regular Maintenance Tasks

1. **Database Backups**
   - Replit: Automatic backups included
   - Self-hosted: Set up pg_dump cron job
   ```bash
   pg_dump $DATABASE_URL > backup_$(date +%Y%m%d).sql
   ```

2. **Dependency Updates**
   ```bash
   npm outdated              # Check for updates
   npm update                # Update minor versions
   npm audit                 # Security audit
   npm audit fix             # Fix vulnerabilities
   ```

3. **Log Monitoring**
   - Check server logs for errors
   - Monitor contact form submissions
   - Review job application activity

### Database Management

**View Database Tables**
```bash
npm run db:studio    # Opens Drizzle Studio GUI
```

**Push Schema Changes**
```bash
npm run db:push      # Sync schema to database
```

**Add New Database Tables**
1. Define schema in `shared/schema.ts`
2. Run `npm run db:push`
3. Add storage methods in `server/storage.ts`
4. Create API routes in `server/routes.ts`

### User Management

**Default Admin Credentials**
- Username: `admin`
- Password: `admin123`
- **Important**: Change this immediately in production!

**User Roles**
- `admin`: Full access to admin dashboard
- `employee`: Access to employee features
- `customer`: Standard user access

**Add New Admin User (via database)**
```sql
INSERT INTO users (username, password, role, full_name, email)
VALUES ('newadmin', '$2b$10$hashedpassword', 'admin', 'Admin Name', 'admin@email.com');
```

---

## Future Expansion Guide

### Adding New Pages

1. **Create Page Component**
   ```typescript
   // client/src/pages/NewPage.tsx
   export default function NewPage() {
     return (
       <div className="min-h-screen">
         {/* Page content */}
       </div>
     );
   }
   ```

2. **Register Route**
   ```typescript
   // client/src/App.tsx
   import NewPage from "@/pages/NewPage";
   
   // In Router component:
   <Route path="/new-page" component={NewPage} />
   ```

3. **Add Navigation (Optional)**
   ```typescript
   // client/src/lib/siteConfig.ts
   export const navItems = [
     // existing items...
     { label: "New Page", href: "/new-page" }
   ];
   ```

### Adding New API Endpoints

1. **Define Schema** (if needed)
   ```typescript
   // shared/schema.ts
   export const newTable = pgTable("new_table", {
     id: serial("id").primaryKey(),
     name: text("name").notNull(),
     // more fields...
   });
   ```

2. **Add Storage Methods**
   ```typescript
   // server/storage.ts
   async getNewItems(): Promise<NewItem[]> {
     return await db.select().from(newTable);
   }
   ```

3. **Create API Route**
   ```typescript
   // server/routes.ts
   app.get("/api/new-items", async (req, res) => {
     const items = await storage.getNewItems();
     res.json(items);
   });
   ```

### Adding New Features

**Email Notifications**
- Package: `nodemailer` (already installed)
- Configure SMTP settings in environment variables

**Payment Processing**
- Package: `stripe` (already installed)
- Add Stripe API keys to secrets

**File Uploads**
- Package: `multer` (already installed)
- Configure storage destination

**Real-time Features**
- Package: `ws` (already installed)
- WebSocket support ready for implementation

### Scaling Considerations

1. **Database Optimization**
   - Add indexes for frequently queried columns
   - Implement connection pooling
   - Consider read replicas for high traffic

2. **Caching**
   - Add Redis for session storage
   - Implement API response caching
   - Use CDN for static assets

3. **Performance**
   - Enable gzip compression
   - Optimize images (WebP format)
   - Lazy load below-fold content

---

## Project Structure

```
/
├── client/                    # Frontend React application
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── layout/        # Header, Footer, Layout
│   │   │   └── ui/            # shadcn/ui components
│   │   ├── hooks/             # Custom React hooks
│   │   ├── lib/               # Utilities and config
│   │   │   ├── siteConfig.ts  # Centralized content config
│   │   │   ├── auth.tsx       # Authentication context
│   │   │   └── queryClient.ts # API client setup
│   │   ├── pages/             # Page components
│   │   └── App.tsx            # Main app with routing
│   └── index.html
├── server/                    # Backend Express application
│   ├── index.ts               # Server entry point
│   ├── routes.ts              # API routes
│   ├── storage.ts             # Database operations
│   └── vite.ts                # Vite integration
├── shared/                    # Shared types and schemas
│   └── schema.ts              # Database schema + types
└── package.json
```

---

## Troubleshooting

**Application won't start**
- Check DATABASE_URL is set correctly
- Verify PostgreSQL is running
- Check port 5000 is available

**Database connection fails**
- Verify database credentials
- Check network/firewall settings
- Ensure database exists

**Styles not loading**
- Run `npm run build` for production
- Check Tailwind config
- Clear browser cache

**Login not working**
- Verify user exists in database
- Check password is hashed correctly
- Ensure SESSION_SECRET is set

---

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the codebase documentation
3. Check for similar issues in the repository

## License

MIT License - See LICENSE file for details
