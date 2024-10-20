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
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { MoveRightIcon } from 'lucide-react';
import { OvulationFormSchema, Predict_Ovulation } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

type OvulationFormFields = keyof z.infer<typeof OvulationFormSchema>;

const fields: { name: OvulationFormFields; label: string }[] = [
  {
    name: 'cervicalMucus',
    label: 'Have you noticed changes in cervical mucus?',
  },
  { name: 'ovulationPain', label: 'Do you experience ovulation pain?' },
  { name: 'increasedLibido', label: 'Have you noticed an increase in libido?' },
  { name: 'breastTenderness', label: 'Do you experience breast tenderness?' },
  { name: 'moodChanges', label: 'Have you experienced mood changes?' },
  { name: 'bloating', label: 'Do you feel bloated?' },
  { name: 'temperatureShift', label: 'Have you noticed a temperature shift?' },
  {
    name: 'positiveOvulationTest',
    label: 'Have you had a positive ovulation test?',
  },
  { name: 'fatigue', label: 'Do you feel fatigued?' },
  {
    name: 'acneSkinChanges',
    label: 'Have you noticed changes in your skin or acne?',
  },
  { name: 'headaches', label: 'Do you experience headaches?' },
  {
    name: 'appetiteChanges',
    label: 'Have you experienced changes in appetite?',
  },
  { name: 'nausea', label: 'Do you feel nauseous?' },
  {
    name: 'increasedSmell',
    label: 'Have you noticed an increased sense of smell?',
  },
  { name: 'lightSpotting', label: 'Have you experienced light spotting?' },
];

export function OvulationWindowPredictor() {
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
        <Ovulating_Window_Prediction_Form />
      </DialogContent>
    </Dialog>
  );
}

function Ovulating_Window_Prediction_Form() {
  const form = useForm<z.infer<typeof OvulationFormSchema>>({
    resolver: zodResolver(OvulationFormSchema),
    defaultValues: {
      cervicalMucus: 'No',
      ovulationPain: 'No',
      increasedLibido: 'No',
      breastTenderness: 'No',
      moodChanges: 'No',
      bloating: 'No',
      temperatureShift: 'No',
      positiveOvulationTest: 'No',
      fatigue: 'No',
      acneSkinChanges: 'No',
      headaches: 'No',
      appetiteChanges: 'No',
      nausea: 'No',
      increasedSmell: 'No',
      lightSpotting: 'No'
    },
  });

  function onSubmit(data: z.infer<typeof OvulationFormSchema>) {
    console.log(data); // Handle form submission
    const probability = Predict_Ovulation(data);
    toast({
      title: "Ovulation Probability",
      description: `${probability.probabilityOvulation || 0.00}% - Please note that this is not a 100% guarantee of diagnosis.`,
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
        {fields.map((field, idx) => (
          <FormField
            key={idx}
            control={form.control}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem className='space-y-3'>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={formField.onChange}
                    defaultValue={formField.value}
                    className='flex flex-col space-y-1'
                  >
                    <FormItem className='flex items-center space-x-3'>
                      <FormControl>
                        <RadioGroupItem value='Yes' />
                      </FormControl>
                      <FormLabel>Yes</FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3'>
                      <FormControl>
                        <RadioGroupItem value='No' />
                      </FormControl>
                      <FormLabel>No</FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3'>
                      <FormControl>
                        <RadioGroupItem value='Sometimes' />
                      </FormControl>
                      <FormLabel>Sometimes</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit">
              Submit
            </Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </Form>
  );
}

export default OvulationWindowPredictor;
