import { useState } from "react";
import {
  Buttons,
  CreateButton,
  Field,
  Form,
  Label,
  NextButton,
  Settings,
  Text,
} from "../assets/style/ScheduleFormStyle";
import DatePickerOne from "../components/input/DatePickerOne";
import TimePicker from "../components/input/TimePicker";
import { SendScheduleConText } from "../type/interview";
import { useOutletContext } from "react-router-dom";

const FormAssignment = () => {
  const [formData, setFormData] = useState({
    endDate: new Date(),
    endHour: new Date(2024, 7, 13, 18, 0),
  });
  const { sendSchedule, clickNext } = useOutletContext<SendScheduleConText>();

  return (
    <Form>
      <Settings>
        <Field>
          <Label>
            <Text>과제 마감 날짜</Text>
            <DatePickerOne
              value={formData.endDate}
              onChange={date => setFormData({ ...formData, endDate: date })}
            />
          </Label>
          <Label>
            <Text>시간</Text>
            <TimePicker
              value={formData.endHour}
              onChange={date => setFormData({ ...formData, endHour: date })}
            />
          </Label>
        </Field>
      </Settings>
      <Buttons>
        <CreateButton className="btn" type="button" onClick={sendSchedule}>
          일정 저장하기
        </CreateButton>
        <NextButton className="btn" type="button" onClick={clickNext}>
          다음
        </NextButton>
      </Buttons>
    </Form>
  );
};

export default FormAssignment;