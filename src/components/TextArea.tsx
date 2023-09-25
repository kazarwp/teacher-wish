import { Button, Textarea } from "@mantine/core";

export const TextArea: React.FC = () => {
  return (
    <div>
      <Textarea size="md" radius="md" style={{ width: "80%", marginLeft: "30px" }} placeholder="Введите ваши пожелания"/>
      <Button variant="filled" style={{ width: "20%", margin: '10px 30px 0' }} >Отправить</Button>
    </div>
  );
};
