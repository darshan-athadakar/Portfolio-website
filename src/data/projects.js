export const projects = [
    {
        title: "E-Commerce Microservices Platform",
        description: "Enterprise-grade e-commerce platform built with microservices architecture, featuring product catalog, order management, payment processing, and inventory tracking with event-driven communication.",
        techStack: ["Java 17", "Spring Boot", "Spring Cloud", "Netflix Eureka", "API Gateway", "Kafka", "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "JWT", "OAuth2"],
        features: [
            "Implemented 6 independent microservices (Product Service, Order Service, Payment Service, Inventory Service, User Service, Notification Service) communicating via Apache Kafka for asynchronous event-driven architecture",
            "Configured Spring Cloud Netflix Eureka for service discovery and Spring Cloud Gateway for intelligent routing, load balancing, and rate limiting with 99.9% uptime",
            "Integrated Stripe payment gateway with idempotency keys and webhook handling for secure transaction processing, handling $100K+ in test transactions",
            "Implemented distributed caching with Redis for product catalog and session management, reducing database queries by 60% and improving response time to under 100ms",
            "Designed polyglot persistence strategy using PostgreSQL for transactional data and MongoDB for product catalog, optimizing for specific use cases",
            "Implemented Circuit Breaker pattern using Resilience4j for fault tolerance and graceful degradation during service failures",
            "Secured microservices with OAuth2 and JWT-based authentication, implementing role-based access control (RBAC) for admin, seller, and customer roles",
            "Containerized all services with Docker and orchestrated with Kubernetes, implementing horizontal pod autoscaling (HPA) based on CPU/memory metrics"
        ],
        github: "https://github.com/yourusername/ecommerce-microservices",
        demo: null,
        category: "Microservices"
    },
    {
        title: "Banking Microservices System",
        description: "Scalable banking application with microservices for account management, transaction processing, loan services, and fraud detection, featuring SAGA pattern for distributed transactions.",
        techStack: ["Java 17", "Spring Boot", "Spring Cloud", "RabbitMQ", "MySQL", "Redis", "Zipkin", "Prometheus", "Grafana", "Docker", "Jenkins", "Swagger"],
        features: [
            "Architected 5 core microservices (Account Service, Transaction Service, Loan Service, Fraud Detection Service, Notification Service) with RESTful APIs documented using Swagger/OpenAPI 3.0",
            "Implemented SAGA orchestration pattern for distributed transactions across multiple services, ensuring data consistency without two-phase commit",
            "Developed real-time fraud detection service using rule-based engine analyzing transaction patterns, flagging suspicious activities with 95% accuracy",
            "Integrated RabbitMQ message broker for asynchronous communication with dead letter queues (DLQ) for failed message handling and retry mechanisms",
            "Implemented distributed tracing using Spring Cloud Sleuth and Zipkin for end-to-end request tracking across microservices, reducing debugging time by 70%",
            "Set up comprehensive monitoring with Prometheus for metrics collection and Grafana dashboards for real-time visualization of service health, latency, and throughput",
            "Designed database-per-service pattern with MySQL, implementing optimistic locking for concurrent transaction handling and preventing race conditions",
            "Established CI/CD pipeline with Jenkins for automated testing, building, and deployment, achieving 15-minute deployment cycles with automated rollback capabilities"
        ],
        github: "https://github.com/yourusername/banking-microservices",
        demo: null,
        category: "Microservices"
    },
    {
        title: "AI-Powered Chatbot Web Application",
        description: "Full-stack intelligent chatbot application integrating Spring AI and Codellama (Ollama) for natural language processing, featuring context-aware conversations, chat history, and real-time streaming responses.",
        techStack: ["Java 17", "Spring Boot 3.x", "Spring AI", "Codellama (Ollama)", "React.js 18", "Node.js", "WebSocket", "REST APIs", "PostgreSQL", "Docker", "Nginx"],
        features: [
            "Integrated Codellama 7B model via Ollama API with Spring AI framework for intelligent, context-aware conversational AI capabilities, processing 1000+ queries daily",
            "Engineered modular backend architecture with ChatController, ChatService, and OllamaService layers following SOLID principles and dependency injection for scalability",
            "Designed responsive React.js frontend with Material-UI components, implementing real-time chat interface with WebSocket for streaming responses and typing indicators",
            "Implemented conversation context management with sliding window technique, maintaining last 10 messages for coherent multi-turn conversations",
            "Developed chat history persistence using PostgreSQL with full-text search capabilities, enabling users to search and retrieve past conversations",
            "Optimized AI response latency from 5 seconds to 1.5 seconds through prompt engineering, response caching, and asynchronous processing",
            "Implemented rate limiting and request queuing to prevent API abuse and ensure fair resource allocation across concurrent users",
            "Containerized application with Docker Compose for easy deployment, including Ollama service, PostgreSQL database, and Nginx reverse proxy"
        ],
        github: "https://github.com/yourusername/ai-chatbot",
        demo: null,
        category: "AI/ML"
    },
    {
        title: "Gesture-to-Speech Assistive Communication System",
        description: "IoT-based assistive technology system using flex sensors and MEMS accelerometer integrated with ESP32 microcontroller to translate hand gestures into real-time speech and text for speech and hearing-impaired individuals.",
        techStack: ["Java", "Android SDK", "XML", "PHP", "MySQL", "ESP32", "Arduino IDE", "MQTT", "REST APIs", "Text-to-Speech API"],
        features: [
            "Designed hardware system using 5 flex sensors and MPU6050 MEMS accelerometer interfaced with ESP32 microcontroller for accurate gesture recognition with 92% accuracy",
            "Developed Android application in Java with Material Design UI, implementing real-time gesture-to-text conversion and text-to-speech synthesis using Google TTS API",
            "Implemented MQTT protocol for low-latency IoT communication between ESP32 device and Android app, achieving under 200ms response time",
            "Created PHP-based REST API backend with MySQL database for storing gesture mappings, user profiles, and usage analytics",
            "Trained custom gesture recognition model using machine learning algorithms (K-Nearest Neighbors) on 500+ gesture samples for improved accuracy",
            "Designed power-efficient system with sleep mode and wake-on-gesture functionality, extending battery life to 8+ hours of continuous use",
            "Developed calibration module for personalized gesture customization, allowing users to define custom gestures for frequently used phrases",
            "Recognized in Top 5 of College Hackathon for innovation in assistive technology and potential real-world impact in healthcare and communication sectors"
        ],
        github: "https://github.com/yourusername/gesture-to-speech",
        demo: null,
        category: "IoT"
    },
    {
        title: "Weather Report Web Service",
        description: "Full-stack CRUD application for managing and visualizing weather data with RESTful APIs, custom JPQL queries, and responsive frontend for city-based weather information retrieval.",
        techStack: ["Java 11", "Spring Boot 2.7", "Spring Data JPA", "Hibernate", "MySQL", "REST APIs", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Chart.js"],
        features: [
            "Developed RESTful APIs with Spring Boot following REST architectural constraints, implementing HATEOAS for hypermedia-driven navigation",
            "Designed normalized database schema with MySQL, implementing entity relationships and constraints for data integrity",
            "Implemented custom JPQL queries and native SQL queries for complex data retrieval, including weather trends and statistical analysis",
            "Created responsive single-page application (SPA) using vanilla JavaScript and Bootstrap, featuring interactive weather cards and search functionality",
            "Integrated Chart.js library for data visualization, displaying temperature trends, humidity levels, and precipitation forecasts with interactive graphs",
            "Implemented input validation and error handling on both frontend and backend, ensuring data consistency and user-friendly error messages",
            "Added pagination and sorting capabilities for large datasets, improving performance and user experience when browsing weather records",
            "Deployed application on AWS EC2 with MySQL RDS, implementing automated backups and monitoring with CloudWatch"
        ],
        github: "https://github.com/yourusername/weather-service",
        demo: null,
        category: "Web Application"
    }
];
