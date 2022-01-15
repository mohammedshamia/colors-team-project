import {
  Container,
  Button,
  Circle,
  Typography,
  Icon,
  Image,
} from '../../../components';

const ProductOverview: React.FC = () => {
  return (
    <Container>
      <Container direction="column">
        <Image src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
        <Container direction="row">
          <Image src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          <Image src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          <Image src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
        </Container>
      </Container>
      <Container direction="column">
        <Container>
          <Typography variant="h3">Apple iPhone 11 Pro 256GB Memory</Typography>
          <Typography variant="h2" bold>
            $499.99
          </Typography>
        </Container>
        <Typography variant="h2" bold>
          counter
        </Typography>
        <Container>
          <Typography>Color: </Typography> <Typography bold> silver</Typography>
        </Container>
        <Container>
          <Circle color="#FED6BC" />
          <Circle color="#D7D7D7" borderColor="black" />
          <Circle color="#6B7B73" />
        </Container>
        <Container>
          <Typography>Size: </Typography> <Typography bold> 256GB</Typography>
        </Container>
        <Container>
          <Button color="#FED6BC">64GB</Button>
          <Button color="#D7D7D7">128GB</Button>
          <Button color="#6B7B73">256GB</Button>
          <Button width="2rem">
            <Icon icon="save" />
          </Button>
          <Button color="#6B7B73">256GB</Button>
        </Container>
        <Typography variant="p">
          Et placeat odio voluptas saepe ullam enim sed. Sint rem sint. Ex enim
          aperiam consequatur. Est temporibus ab. Pariatur aut ut temporibus
          culpa. Aut adipisci veniam esse. Quidem dolor corporis consequuntur
          non sunt et neque. Aut dolorem repellat quo architecto sint minima
          doloremque. At quae laborum incidunt vel voluptas dolor similique aut.
          Aut sunt saepe tempore eos sint ut amet voluptatibus dicta. Nihil nemo
          animi. Est laboriosam tempore. Porro id voluptates a nesciunt natus
          qui. Qui mollitia iusto. Perspiciatis reiciendis laborum consequuntur
          sint porro omnis et facere. Voluptatem vitae quo. Similique atque
          cumque culpa temporibus consequatur voluptatibus id. Cupiditate alias
          quas non ab veritatis et. Sed et qui consequatur aut. Eum consequuntur
          necessitatibus veritatis voluptatem qui velit repellat numquam
          tempore. Qui quam eos modi. Libero corporis ut et. Eligendi est
          expedita aspernatur non repellendus nihil perferendis. Et deserunt
          doloremque esse. Iusto veniam odio consequatur sint illum. Quis dolor
          doloribus. Nemo ut sit adipisci dolores iure. Est qui rerum ullam
          mollitia molestiae magnam porro at fugit. Neque ut debitis ut porro
          rerum. Occaecati temporibus voluptatem quo eaque. Voluptas impedit
          veritatis dolore assumenda. Aut doloribus unde repellat pariatur
          consequatur. Blanditiis voluptas aut tempora facilis fugi.
        </Typography>
      </Container>
    </Container>
  );
};

export default ProductOverview;
