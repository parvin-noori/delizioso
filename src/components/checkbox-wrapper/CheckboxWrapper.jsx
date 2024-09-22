import { Checkbox } from "../ui/checkbox";
export default function CheckboxWrapper() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="rememeberMe" />
      <label
        htmlFor="rememeberMe"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        remember me
      </label>
    </div>
  );
}
