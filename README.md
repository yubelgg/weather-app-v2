# GPT Weather 🌦️

GPT Weather is an innovative weather forecast application that combines conversational AI with comprehensive weather data visualization to provide personalized weather insights. The application leverages OpenAI's language models to offer natural, intuitive interactions while delivering detailed weather information.

## Features ✨

- **Conversational Weather Updates**: Natural language interactions for weather queries
- **Dynamic Data Visualization**: Comprehensive weather data presented through intuitive visual tools
- **Personalized Insights**: Tailored weather information based on user context and preferences
- **Real-time Weather Data**: Integration with reliable weather APIs for accurate forecasts

## Tech Stack 🛠️

- **Frontend**: [Next.js](https://nextjs.org/)
- **API Integration**: [StepZen](https://stepzen.com/)
- **GraphQL Client**: [Apollo Client](https://www.apollographql.com/docs/react/)
- **AI Integration**: [OpenAI API](https://openai.com/api/)

## Getting Started 🚀

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key
- StepZen account and API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gpt-weather.git
cd gpt-weather
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your API keys:
```env
OPENAI_API_KEY=your_openai_api_key
STEPZEN_API_KEY=your_stepzen_api_key
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

### Usage 💡

1. Navigate to `http://localhost:3000` in your browser
2. Enter your location or allow location access
3. Interact with the AI chatbot for personalized weather insights
4. Explore the visual weather data representations

## Project Structure 📁

```
gpt-weather/
├── components/         # React components
├── pages/             # Next.js pages
├── lib/               # Utility functions
├── graphql/           # GraphQL queries and mutations
├── styles/            # CSS and styling files
├── public/            # Static assets
└── config/            # Configuration files
```

## API Integration 🔌

The application integrates multiple APIs:
- OpenAI API for natural language processing
- Weather data APIs through StepZen
- GraphQL queries managed by Apollo Client

## Acknowledgments 🙏

- OpenAI for providing the GPT API
- StepZen for GraphQL API integration
- Weather data providers
- Next.js and Apollo Client communities
