#!/bin/bash

# Navigate to the project root directory
cd "$(dirname "$0")"

# Create directories
mkdir -p pages/services
mkdir -p public/data

# Create JSON data file
echo '[
  {"serviceId": "1", "title": "Service 1", "description": "Description for Service 1"},
  {"serviceId": "2", "title": "Service 2", "description": "Description for Service 2"}
]' >public/data/services.json

# Create dynamic route file
cat <<EOF >pages/services/\[serviceId\].tsx
import { useRouter } from 'next';
import ArticleWithPicture from '../components/ArticleWithPicture';

export default function ServicePage() {
  const router = useRouter();
  const { serviceId } = router.query;

  return (
    <div>
      <ArticleWithPicture title="Loading..." description="Loading..." />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { serviceId } = context.params;
  const res = await fetch(\`http://localhost:3000/data/services.json\`);
  const services = await res.json();
  const service = services.find(s => s.serviceId === serviceId);

  return {
    props: {
     ...service
    }
  };
}
EOF

# Create a placeholder for the ArticleWithPicture component
mkdir -p components
touch components/ArticleWithPicture.tsx
echo "import React from 'react';\n\nexport default function ArticleWithPicture({ title, description }) {\n  return (\n    <div>\n      <h1>{title}</h1>\n      <p>{description}</p>\n    </div>\n  );\n}" >components/ArticleWithPicture.tsx

# Output completion message
echo "Setup for dynamic routing based on local JSON files has been completed."
