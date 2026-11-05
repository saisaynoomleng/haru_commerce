'use client';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ActionResponse } from '@/lib/types';
import {
  NewsletterFormInput,
  NewsletterFormSchema,
} from '@/lib/zod-validations';
import React from 'react';
import { clsx, twMerge } from 'cn';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type NewsletterFormProps = {
  className?: string;
  action: (
    data: NewsletterFormInput,
  ) => Promise<ActionResponse<NewsletterFormInput>>;
  isPending: boolean;
};

export const NewsletterForm = ({
  className,
  action,
  isPending,
}: NewsletterFormProps): React.JSX.Element => {
  const form = useForm<NewsletterFormInput>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      email: '',
      readTerm: false,
    },
  });

  const onSubmit: SubmitHandler<NewsletterFormInput> = async (data) => {
    await action(data);

    form.reset();
  };

  return (
    <div className={twMerge(clsx('', className))}>
      <p className="uppercase font-medium">subscribe & enjoy 20% off</p>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email">Email</FieldLabel>

              <InputGroup>
                <InputGroupInput
                  {...field}
                  id="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={fieldState.invalid}
                />

                <InputGroupAddon align="inline-end">
                  <InputGroupButton variant="default">Sign Up</InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </Field>
          )}
        />
      </form>
    </div>
  );
};
