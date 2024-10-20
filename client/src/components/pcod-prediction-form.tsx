import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MoveRightIcon } from "lucide-react";

// Define the schema with Zod for form validation
const FormSchema = z.object({
  irregularCycles: z.enum(["Yes", "No", "Maybe"]),
  weightGain: z.enum(["Yes", "No", "Maybe"]),
  acne: z.enum(["Yes", "No", "Maybe"]),
  hairGrowth: z.enum(["Yes", "No", "Maybe"]),
});

export function PCOD_Predictor() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="border rounded-xl border-black my-3">
          <MoveRightIcon className="w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[70%] overflow-auto">
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
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data); // Handle form submission
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        {/* Irregular Menstrual Cycles Question */}
        <FormField
          control={form.control}
          name="irregularCycles"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Do you have irregular menstrual cycles?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3">
                    <FormControl>
                      <RadioGroupItem value="Yes" />
                    </FormControl>
                    <FormLabel>Yes</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3">
                    <FormControl>
                      <RadioGroupItem value="No" />
                    </FormControl>
                    <FormLabel>No</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3">
                    <FormControl>
                      <RadioGroupItem value="Maybe" />
                    </FormControl>
                    <FormLabel>Maybe</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Weight Gain Question */}
        <FormField
          control={form.control}
          name="weightGain"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Have you experienced weight gain?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3">
                    <FormControl>
                      <RadioGroupItem value="Yes" />
                    </FormControl>
                    <FormLabel>Yes</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3">
                    <FormControl>
                      <RadioGroupItem value="No" />
                    </FormControl>
                    <FormLabel>No</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3">
                    <FormControl>
                      <RadioGroupItem value="Maybe" />
                    </FormControl>
                    <FormLabel>Maybe</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Acne Question */}
        <FormField
          control={form.control}
          name="acne"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Do you have acne?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3">
                    <FormControl>
                      <RadioGroupItem value="Yes" />
                    </FormControl>
                    <FormLabel>Yes</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3">
                    <FormControl>
                      <RadioGroupItem value="No" />
                    </FormControl>
                    <FormLabel>No</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3">
                    <FormControl>
                      <RadioGroupItem value="Maybe" />
                    </FormControl>
                    <FormLabel>Maybe</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Excess Hair Growth Question */}
        <FormField
          control={form.control}
          name="hairGrowth"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Do you have excess hair growth (hirsutism)?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3">
                    <FormControl>
                      <RadioGroupItem value="Yes" />
                    </FormControl>
                    <FormLabel>Yes</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3">
                    <FormControl>
                      <RadioGroupItem value="No" />
                    </FormControl>
                    <FormLabel>No</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3">
                    <FormControl>
                      <RadioGroupItem value="Maybe" />
                    </FormControl>
                    <FormLabel>Maybe</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </form>
    </Form>
  );
}

export default PCOD_Predictor;
