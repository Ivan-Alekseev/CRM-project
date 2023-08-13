import { IconCalendar, IconKeyboardArrowLeft, IconKeyboardArrowRight } from "../../shared/Icons";
import { StyledDatePicker, Text, TimeInterval} from "./styles";

const data = {
  date:"3 дня",
}

function DatePicker() {
  return (
    <>
      <StyledDatePicker>
         <IconKeyboardArrowLeft />
        <TimeInterval>
          <IconCalendar />
          <Text>{data.date}</Text>
        </TimeInterval>
        <IconKeyboardArrowRight />
      </StyledDatePicker>
    </>
  );
}

export default DatePicker;