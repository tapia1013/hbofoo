import Head from 'next/head'
import Image from 'next/image'


export default function CreateUser() {
  return (
    <div>
      <div className='create-user'>
        <div className='create-user__top'>
          <div className='create-user__logo' />
          <span className='create-user__title'>
            Who Is Watching?
          </span>
        </div>

        <div className='create-user__form'>
          <img className='create-user__user-img' src='https://www.dogbreedslist.info/uploads/dog-pictures/maltese-1.jpg' />
          <div className='create-user__input-group'>
            <label>Name</label>
            <input type='text' className='create-user__inputText' />
            <div className='create-user__colors'>
              <div className='create-user__color create-user__color--active' style={{
                background: 'rgb(2,27,64)',
                background: 'linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(119,30,135,1) 100%)'
              }} />
              <div className='create-user__color create-user__color--active' style={{
                background: 'rgb(2,27,64)',
                background: 'linear-gradient(135deg, rgba(41,237,164,1) 11%, rgba(119,30,135,1) 100%)'
              }} />
              <div className='create-user__color create-user__color--active' style={{
                background: 'rgb(2,27,64)',
                background: 'linear-gradient(135deg, rgba(200,137,164,1) 11%, rgba(119,30,135,1) 100%)'
              }} />
              <div className='create-user__color create-user__color--active' style={{
                background: 'rgb(2,27,64)',
                background: 'linear-gradient(135deg, rgba(112,217,14,1) 11%, rgba(119,30,135,1) 100%)'
              }} />
              <div className='create-user__color create-user__color--active' style={{
                background: 'rgb(2,27,64)',
                background: 'linear-gradient(135deg, rgba(190,47,43,1) 11%, rgba(119,30,135,1) 100%)'
              }} />
            </div>
          </div>
        </div>

        <div className='create-user__buttons'>
          <button className='create-user__cancel'>Cancel</button>
          <button className='create-user__save'>Save</button>
        </div>

      </div>
    </div>
  )
}
