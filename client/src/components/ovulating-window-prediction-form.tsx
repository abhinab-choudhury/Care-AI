import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { MoveRightIcon } from 'lucide-react';

const FormSchema = z.object({
  ovulation: z.enum(['Yes', 'No', 'Maybe'], {
    required_error: 'You need to select if you are tracking ovulation.',
  }),
});

export function OvulationWindowPredictor() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  // Submit function to handle form submission
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          className='my-3 rounded-xl border border-black'
        >
          <MoveRightIcon className='w-5' />
        </Button>
      </DialogTrigger>
      <DialogContent className='max-h-[70%] overflow-auto sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Ovulation Window Predictor</DialogTitle>
          <DialogDescription>
            Answer the following question to track your ovulation window.
          </DialogDescription>
        </DialogHeader>

        {/* Form for ovulation prediction */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-full space-y-6'
          >
            <FormField
              control={form.control}
              name='ovulation'
              render={({ field }) => (
                <FormItem className='space-y-3'>
                  <FormLabel>Are you tracking your ovulation window?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex flex-col space-y-1'
                    >
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='Yes' />
                        </FormControl>
                        <FormLabel className='font-normal'>Yes</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='No' />
                        </FormControl>
                        <FormLabel className='font-normal'>No</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='Maybe' />
                        </FormControl>
                        <FormLabel className='font-normal'>Maybe</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type='submit'>Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default OvulationWindowPredictor;
