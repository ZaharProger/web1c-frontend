import Header from '../header/Header';
import Card from './card';
import FloatingButton from './floatingButton';
import ChatBot from './chatBot';
import "../../styles/content.css"
// import { useState } from 'react';

// const [chat, setChat] = useState({
//     isOpened: false
// })

function handleClick() {
    
}

const Content = () => {
    return (
        <div>
            <Header/>
            <div id="Content" className="d-flex flex-column w-100 p-5 text-white">
                <Card>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum. Viverra tellus in hac habitasse platea. Sed sed risus pretium quam vulputate dignissim suspendisse. Massa ultricies mi quis hendrerit dolor magna eget est. At varius vel pharetra vel. Non tellus orci ac auctor augue mauris. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Feugiat sed lectus vestibulum mattis. Scelerisque felis imperdiet proin fermentum leo. Sagittis orci a scelerisque purus semper eget duis. Vel quam elementum pulvinar etiam non quam lacus.</Card>
                <Card>Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Hendrerit gravida rutrum quisque non tellus orci. Enim ut tellus elementum sagittis vitae et leo. Netus et malesuada fames ac. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Aenean vel elit scelerisque mauris pellentesque. Tellus elementum sagittis vitae et. Ut diam quam nulla porttitor massa id. Et ligula ullamcorper malesuada proin libero nunc consequat. Nibh venenatis cras sed felis eget velit aliquet sagittis. Sit amet justo donec enim diam vulputate ut pharetra. Vitae turpis massa sed elementum tempus. In tellus integer feugiat scelerisque varius morbi enim. Massa ultricies mi quis hendrerit. Non nisi est sit amet facilisis magna.</Card>
                <Card>Adipiscing commodo elit at imperdiet dui accumsan. Diam quam nulla porttitor massa. Felis eget velit aliquet sagittis id consectetur purus ut. Orci dapibus ultrices in iaculis nunc sed. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Blandit massa enim nec dui nunc. Vitae tortor condimentum lacinia quis vel. Blandit cursus risus at ultrices. Ultricies tristique nulla aliquet enim tortor at auctor. Sed vulputate odio ut enim blandit volutpat. Quisque non tellus orci ac auctor augue mauris. Velit scelerisque in dictum non consectetur a. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Commodo odio aenean sed adipiscing diam donec adipiscing.</Card>
                <Card>Nec ullamcorper sit amet risus nullam eget. Facilisis magna etiam tempor orci. In massa tempor nec feugiat nisl pretium fusce id. Turpis cursus in hac habitasse platea dictumst. Ut porttitor leo a diam sollicitudin tempor id eu. Quam viverra orci sagittis eu volutpat odio facilisis. Luctus accumsan tortor posuere ac. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Vel quam elementum pulvinar etiam non. Est sit amet facilisis magna etiam. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Sit amet mauris commodo quis imperdiet massa. Nunc lobortis mattis aliquam faucibus purus.</Card>
                <Card>Leo urna molestie at elementum eu facilisis. Placerat in egestas erat imperdiet sed euismod. Proin libero nunc consequat interdum varius sit amet mattis. Imperdiet proin fermentum leo vel. Non nisi est sit amet facilisis. Gravida arcu ac tortor dignissim. Nec ullamcorper sit amet risus. Sagittis orci a scelerisque purus semper. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris.</Card>
                <Card>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum. Viverra tellus in hac habitasse platea. Sed sed risus pretium quam vulputate dignissim suspendisse. Massa ultricies mi quis hendrerit dolor magna eget est. At varius vel pharetra vel. Non tellus orci ac auctor augue mauris. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Feugiat sed lectus vestibulum mattis. Scelerisque felis imperdiet proin fermentum leo. Sagittis orci a scelerisque purus semper eget duis. Vel quam elementum pulvinar etiam non quam lacus.</Card>
                <Card>Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Hendrerit gravida rutrum quisque non tellus orci. Enim ut tellus elementum sagittis vitae et leo. Netus et malesuada fames ac. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Aenean vel elit scelerisque mauris pellentesque. Tellus elementum sagittis vitae et. Ut diam quam nulla porttitor massa id. Et ligula ullamcorper malesuada proin libero nunc consequat. Nibh venenatis cras sed felis eget velit aliquet sagittis. Sit amet justo donec enim diam vulputate ut pharetra. Vitae turpis massa sed elementum tempus. In tellus integer feugiat scelerisque varius morbi enim. Massa ultricies mi quis hendrerit. Non nisi est sit amet facilisis magna.</Card>
                <Card>Adipiscing commodo elit at imperdiet dui accumsan. Diam quam nulla porttitor massa. Felis eget velit aliquet sagittis id consectetur purus ut. Orci dapibus ultrices in iaculis nunc sed. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Blandit massa enim nec dui nunc. Vitae tortor condimentum lacinia quis vel. Blandit cursus risus at ultrices. Ultricies tristique nulla aliquet enim tortor at auctor. Sed vulputate odio ut enim blandit volutpat. Quisque non tellus orci ac auctor augue mauris. Velit scelerisque in dictum non consectetur a. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Commodo odio aenean sed adipiscing diam donec adipiscing.</Card>
                <Card>Nec ullamcorper sit amet risus nullam eget. Facilisis magna etiam tempor orci. In massa tempor nec feugiat nisl pretium fusce id. Turpis cursus in hac habitasse platea dictumst. Ut porttitor leo a diam sollicitudin tempor id eu. Quam viverra orci sagittis eu volutpat odio facilisis. Luctus accumsan tortor posuere ac. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Vel quam elementum pulvinar etiam non. Est sit amet facilisis magna etiam. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Sit amet mauris commodo quis imperdiet massa. Nunc lobortis mattis aliquam faucibus purus.</Card>
                <Card>Leo urna molestie at elementum eu facilisis. Placerat in egestas erat imperdiet sed euismod. Proin libero nunc consequat interdum varius sit amet mattis. Imperdiet proin fermentum leo vel. Non nisi est sit amet facilisis. Gravida arcu ac tortor dignissim. Nec ullamcorper sit amet risus. Sagittis orci a scelerisque purus semper. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris.</Card>
            </div>
            <FloatingButton icon="&#xf086;" onClick={handleClick}/>
            <ChatBot isOpened={true}/>
        </div>
    );
}
export default Content;