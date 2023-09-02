'use client';

import { toast } from 'react-hot-toast';
import { Copy, Server } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge, BadgeProps } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ApiAlertProps {
  title: string;
  description: string;
  variant: 'public' | 'admin';
}

const textMap: Record<ApiAlertProps['variant'], string> = {
  public: 'public',
  admin: 'admin',
};
const variantMap: Record<ApiAlertProps['variant'], BadgeProps['variant']> = {
  public: 'secondary',
  admin: 'destructive',
};

export const ApiAlert = ({
  title,
  description,
  variant = 'public',
}: ApiAlertProps) => {
  const onCopy = () => {
    navigator.clipboard.writeText(description);
    toast.success('Api route copied to clipboard');
  };
  return (
    <Alert>
      {' '}
      <Server className='h-4 w-4' />
      <AlertTitle className='flex items-center gap-x-2'>
        {title}
        <Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
      </AlertTitle>
      <AlertDescription className='mt-4 flex items-center sm:flex-row sm:justify-between'>
        <div className='w-full sm:w-[50%] md:w-auto'>
          <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono md:text-sm font-semibold text-xs'>
            {description}
          </code>
        </div>
        <Button variant={'outline'} size={'icon'} onClick={onCopy}>
          <Copy className='h-4 w-4' />
        </Button>
      </AlertDescription>
    </Alert>
  );
};
