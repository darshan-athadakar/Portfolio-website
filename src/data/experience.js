export const experiences = [
    {
        role: "Java Full Stack Developer (Backend-Focused)",
        company: "AIROBOSOFT Products and Services",
        location: "Bangalore, Karnataka",
        duration: "Oct 2024 - Present",
        type: "Full-time",
        project: "PCI Bridge - Pharmaceutical Compliance Integration Platform (US-based Client)",
        techStack: ["Java 17", "Spring Boot 3.x", "Spring Security", "Spring Data JPA", "MySQL 8.0", "REST APIs", "JWT", "AWS S3", "Docker", "Kubernetes", "Redis", "Jenkins", "Argo CD"],
        achievements: [
            "Architected RESTful microservices backend for PCI Bridge, a HIPAA-compliant pharmaceutical data management platform serving 50+ healthcare providers with 99.9% uptime",
            "Engineered 100+ high-performance REST APIs with Spring Security (JWT + OAuth2) and role-based access control (RBAC), processing 5,000+ requests daily with under 200ms average response time",
            "Optimized complex SQL queries using JPA Criteria API and native queries, reducing query execution time by 45% and database load by 30%",
            "Implemented distributed caching strategy with Redis (TTL-based invalidation, cache-aside pattern), reducing database latency by 25% and improving API throughput by 35%",
            "Designed and implemented database schema with proper indexing, foreign key constraints, and normalization, handling 10,000+ records daily with optimized query performance",
            "Integrated AWS S3 for scalable document storage with multipart upload, versioning, and lifecycle policies, managing 10,000+ documents daily with 99.9% availability",
            "Containerized Spring Boot microservices using Docker with multi-stage builds, reducing image size by 40% and deployment time by 50%",
            "Orchestrated microservices deployment on Kubernetes with horizontal pod autoscaling (HPA), achieving zero-downtime deployments and 50% reduction in infrastructure costs",
            "Established CI/CD pipelines using Jenkins for automated builds, testing, and Argo CD for GitOps-based deployments, reducing deployment time from 2 hours to 15 minutes",
            "Implemented comprehensive API documentation using Swagger/OpenAPI 3.0 and Spring REST Docs, improving developer onboarding time by 60%",
            "Set up monitoring and observability with ELK stack (Elasticsearch, Logstash, Kibana) and Prometheus metrics, enabling real-time performance tracking and proactive issue resolution",
            "Collaborated with cross-functional Agile teams in bi-weekly sprints, consistently achieving 95% on-time delivery with 85%+ code coverage through JUnit and Mockito tests"
        ]
    },
    {
        role: "Java Developer Intern",
        company: "AIROBOSOFT Products and Services",
        location: "Bangalore, Karnataka",
        duration: "Jul 2024 - Oct 2024",
        type: "Internship",
        project: "Internal Development & Training Projects",
        techStack: ["Java 11", "Spring Boot 2.7", "Spring Data JPA", "Hibernate", "MySQL", "REST APIs", "Postman", "JUnit 5", "Mockito", "Git", "Maven"],
        achievements: [
            "Developed RESTful CRUD APIs using Spring Boot and Spring Data JPA with repository pattern, implementing proper HTTP status codes and exception handling",
            "Designed normalized database schemas with MySQL, implementing entity relationships (One-to-Many, Many-to-Many) using JPA annotations and Hibernate ORM",
            "Implemented custom JPQL queries and native SQL queries for complex data retrieval, optimizing query performance with proper indexing strategies",
            "Created comprehensive API test suites using Postman with 50+ test cases covering positive, negative, and edge scenarios, achieving 90% API coverage",
            "Developed unit tests using JUnit 5 and Mockito framework with 80%+ code coverage, implementing test-driven development (TDD) practices",
            "Implemented Spring Security with JWT-based authentication and authorization, securing REST endpoints with role-based access control",
            "Configured application properties for multiple environments (dev, test, prod) using Spring Profiles and externalized configuration",
            "Participated in code reviews, daily stand-ups, and sprint retrospectives, gaining hands-on experience with Agile Scrum methodology and Git workflow (branching, merging, pull requests)"
        ]
    }
];
