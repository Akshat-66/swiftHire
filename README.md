# SwiftHire - Modern Recruitment Platform

![SwiftHire Banner](https://./swiftHireBanner.png)
## 🚀 About SwiftHire

SwiftHire is a cutting-edge recruitment platform that bridges the gap between talented candidates and forward-thinking companies. Built with modern web technologies, we provide a seamless hiring experience for both recruiters and job seekers.

## ✨ Features

### 👨‍💼 For Recruiters
- **Post Multiple Jobs** - Create and manage multiple job listings with detailed descriptions
- **Comprehensive Dashboard** - View all applicants in one place with organized candidate information
- **Rich Job Descriptions** - Add company logos, requirements, and detailed job specifications
- **Candidate Management** - Download resumes, read candidate info, and track applications
- **Application Insights** - Get complete overview of all job applications

### 👩‍🎓 For Candidates
- **Smart Job Search** - Find perfect opportunities matching your skills
- **Save Favorite Jobs** - Bookmark interesting positions for later
- **Application Tracking** - Monitor your application status in real-time
- **Easy Applications** - Apply with your resume quickly and efficiently
- **Personal Dashboard** - Manage all your applications from one place

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Backend**: Supabase
- **Authentication**: Clerk
- **Deployment**: Vercel

## 🚀 Live Demo

Check out our live application: [SwiftHire Live Demo](https://swift-hire-pink.vercel.app/)

## 💻 Local Development

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd swifthire
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and add the following variables:
   ```env
   VITE_SUPABASE_URL=your_supabase_url_here
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
swifthire/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Application pages
│   ├── hooks/         # Custom React hooks
│   ├── utils/         # Utility functions
│   └── lib/           # External library configurations
├── public/            # Static assets
└── package.json       # Project dependencies
```

## 🔧 Configuration

### Supabase Setup
1. Create a Supabase project
2. Get your project URL and anon key
3. Set up your database schema for jobs, applications, and users

### Clerk Setup
1. Create a Clerk application
2. Configure authentication providers
3. Get your publishable key

## 🤝 Contributing

We welcome contributions! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

If you have any questions or need help with setup, please open an issue in the repository.

---

<div align="center">

**Built with ❤️ using React.js, Supabase, Tailwind CSS & Shadcn/ui**

⭐ Star us on GitHub if you find this project helpful!

</div>
