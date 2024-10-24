import { memo, ReactNode, useEffect, useState } from 'react';
import { Button, Flex, IconButton, Link, Loader } from '@strapi/design-system';
import { CopyIcon } from '../../../shared/ui';
import { Check } from '@strapi/icons';
import { taskLinkApi } from '../api';
import { CLIENT_APP_URL } from '../../../shared/config';

interface GenerateLinkProps {
  task?: number;
}

export const GenerateLink = memo(function GenerateLink({ task }: GenerateLinkProps) {
  const [link, setLink] = useState<string | null>(null);

  const [createTaskLink, { isLoading, error, data }] = taskLinkApi.useCreateTaskLinkMutation();

  const [icon, setIcon] = useState<ReactNode>(<CopyIcon />);


  const handleCopyLink = () => {
    if (link) {
      navigator.clipboard.writeText(link).then(_ => setIcon(<Check />));
    }
  }

  useEffect(() => {
    if (data) {
      setLink(`${CLIENT_APP_URL}/${data.data.uuid}`);
    }
  }, [data, task]);

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (!task) {
    return <p>Необходимо выбрать специальность.</p>
  }

  return (
    <Flex direction="column" gap={4} alignItems="flex-start">
      <Button onClick={()  => createTaskLink(task)}>Сгенерировать ссылку на задание</Button>
      {link &&
        <Flex direction="column" gap={4} alignItems="flex-start" style={{ fontSize: 14 }}>
          <Flex gap={2}>
            <span>Generated Link:</span>
            <Link>{link}</Link>
            <IconButton label="Скопировать" variant="ghost" onClick={handleCopyLink}>
              {icon}
            </IconButton>
          </Flex>
          <p>
            <p>Скопируйте ссылку, чтобы отправить ее соискателю.</p>
            <p>
              <span style={{ color: 'red' }}>Внимание!</span>
              Ссылка является одноразовой, поэтому не переходите по ней,
              во избежание ее инвалидации.
            </p>
          </p>
        </Flex>
      }
    </Flex>
  );
});
