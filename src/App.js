import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

import audios from './audios.json';

function App() {
  return (
    <Container className="p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Shruti: Text-to-Speech</h1>
      <ListGroup variant="flush">
        {audios.audios.map((audio) => (
          <Card key={audio.id} className="mb-6">
            <Card.Body>
              <Card.Title className="text-xl font-bold">{audio.name}</Card.Title>
              <div className="mb-4">
                <audio controls className="w-full">
                  <source src={audio.audioPhase1Url} type="audio/mpeg" />
                </audio>
                <Card.Text className="text-sm">Phase 1 Training</Card.Text>
              </div>
              <div className="mb-4">
                <audio controls className="w-full">
                  <source src={audio.audioPhase2Url} type="audio/mpeg" />
                </audio>
                <Card.Text className="text-sm">Phase 2 Fine-tuning</Card.Text>
              </div>
              <div>
                <audio controls className="w-full">
                  <source src={audio.audioPostProcessedUrl} type="audio/mpeg" />
                </audio>
                <Card.Text className="text-sm">Audio Post-processed</Card.Text>
              </div>
              <hr className="my-4" />
              <Card.Text>{audio.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </ListGroup>
    </Container>
  );
}

export default App;
