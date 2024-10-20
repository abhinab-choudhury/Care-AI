import { Button } from '@/components/ui/button';
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { MoveRightIcon } from 'lucide-react';
import { Calculate_PCOD_Probability, PCODFormSchema } from '@/lib/utils';
import { toast } from "@/hooks/use-toast"

type FormFields = keyof z.infer<typeof PCODFormSchema>;

export function PCOD_Predictor() {
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
          <DialogTitle>PCOD/PCOS Predictor</DialogTitle>
          <DialogDescription>
            Answer the following questions to predict if you might have symptoms
            of PCOD or PCOS.
          </DialogDescription>
        </DialogHeader>
        <PCOD_Prediction_Form />
      </DialogContent>
    </Dialog>
  );
}

export function PCOD_Prediction_Form() {
  const form = useForm<z.infer<typeof PCODFormSchema>>({
    resolver: zodResolver(PCODFormSchema),
    defaultValues: {
      irregularMenstrualCycles: 'No',
      weightGain: 'No',
      acne: 'No',
      hirsutism: 'No',
      thinningHair: 'No',
      ovulationIssues: 'No',
      fertilityIssues: 'No',
      insulinResistance: 'No',
      fatigue: 'No',
      mentalHealthSymptoms: 'No',
      cystsInOvaries: 'No',
      severeCondition: 'No',
    },
  });

  function onSubmit(data: z.infer<typeof PCODFormSchema>) {
    console.log(data); // Handle form submission
    const probability = Calculate_PCOD_Probability(data);
    toast({
      title: "PCOD Probability",
      description: `${probability.probabilityPCOD || 0.00}% - Please note that this is not a 100% guarantee of diagnosis.`,
    })
  }

  const fields: { name: FormFields; label: string }[] = [
    {
      name: 'irregularMenstrualCycles',
      label: 'Do you have irregular menstrual cycles?',
    },
    { name: 'weightGain', label: 'Have you experienced weight gain?' },
    { name: 'acne', label: 'Do you have acne?' },
    { name: 'hirsutism', label: 'Do you have excess hair growth (hirsutism)?' },
    { name: 'thinningHair', label: 'Do you have thinning hair or hair loss?' },
    { name: 'ovulationIssues', label: 'Do you experience ovulation issues?' },
    { name: 'fertilityIssues', label: 'Do you have fertility issues?' },
    { name: 'insulinResistance', label: 'Do you have insulin resistance?' },
    { name: 'fatigue', label: 'Do you often feel fatigued?' },
    {
      name: 'mentalHealthSymptoms',
      label: 'Do you experience mental health symptoms?',
    },
    { name: 'cystsInOvaries', label: 'Do you have cysts in your ovaries?' },
    { name: 'severeCondition', label: 'Is your condition severe?' },
  ];

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
        <DialogFooter >
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

export default PCOD_Predictor;
