import { Card } from "react-bootstrap";

type CardProps = {
  title: string,
  subtitle: string,
  description: string
}

export const CardItem = ({title, subtitle, description}: CardProps) => {
  return(
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}