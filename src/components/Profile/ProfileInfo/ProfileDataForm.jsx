import { Field, Form, reduxForm } from "redux-form"
import { required } from "../../../units/validators/validators"
import { createField, Input, TextArea } from "../../common/FormsControls/FormsControls"

const ProfileDataForm = (props, profile) => {
  return (
    <Form  action="" onSubmit={props.hendleSubmit}>
      <div><button>Save</button></div>

      <div>
        <b>Name</b>:
        {/* {createField('Full name', 'fullName', [], Input)} */}
        <Field type="text" placeholder="Full name" name="fullName" component={Input}
          validate={[required]} />

      </div>
      <div>
        <b>Looking for a job</b>:
        <Field type="checkbox" component={Input} name="lookingForAJob" />
      </div>

      <div>
        <b>My professional skills</b>:
        <Field type="textArea" placeholder="Professional skills" component={TextArea} name="lookingForAJobDescription" />
      </div>

      <div>
        <b>About my</b>:
        <Field type="textArea" component={TextArea} name="aboutMe" />
      </div>
      <div>
      {/* <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
          return <div>
            <b>{key}: {createField(key, "contacts."+key, [], Input) }</b>
          </div>
        })} */}
      </div>
    </Form>
  )
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm