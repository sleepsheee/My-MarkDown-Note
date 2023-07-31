import { Form, Stack, Row, Col } from "react-bootstrap";
import CreateableReactSelect from "react-select/creatable";
export function NoteForm() {
  return (
    <>
      <Form>
        <Stack gap={1}>
          <Row>
            <Col>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="tags">
                <Form.Label>Tags</Form.Label>
                <CreateableReactSelect isMulti />
              </Form.Group>
            </Col>

            <Form.Group controlId="markdown">
              <Form.Label>Body</Form.Label>
              <Form.Control required as="textarea" rows={20} />
            </Form.Group>
          </Row>
        </Stack>
      </Form>
    </>
  );
}
