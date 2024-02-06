import React from 'react'

import asperagussoup from '../assets/menuItemsPic/asperagussoup.jpg';
import beefwellington from '../assets/menuItemsPic/beefwellington.jpg';
import blueberrysalad from '../assets/menuItemsPic/blueberrysalad.jpg';
import branzino from '../assets/menuItemsPic/branzino.jpg';
import butternutsoup from '../assets/menuItemsPic/butternutsoup.jpg';
import chicken from '../assets/menuItemsPic/chicken.jpg';
import grainbowl from '../assets/menuItemsPic/grainbowl.jpg';
import lambchops from '../assets/menuItemsPic/lambchops.jpg';
import pasta from '../assets/menuItemsPic/pasta.jpg';
import saladchicken from '../assets/menuItemsPic/saladchicken.jpg';
import salmondiet from '../assets/menuItemsPic/salmonsalad.jpg';
import scallops from '../assets/menuItemsPic/scallops.jpg';
import surfandturf from '../assets/menuItemsPic/surfandturf.jpg';
import tomatospaghetti from '../assets/menuItemsPic/tomatospaghetti.jpg';
import veal from '../assets/menuItemsPic/veal.jpg';

const Menu = () => {
  const lightItems = [
    blueberrysalad,
    grainbowl,
    saladchicken,
    salmondiet,
    asperagussoup,
    butternutsoup,
  ];
  const entrees = [
    surfandturf,
    tomatospaghetti,
    scallops,
    pasta,
    chicken,
    lambchops,
    branzino,
    beefwellington,
    veal
  ]


  return (
    <div className='App'>
      <div className="menu-container">
        <div className='stacked-container'>
      <div className="menu-name">Celeste</div>
      <div className="menu">
        <div className="lite-fare">
        <h2>Small Plates</h2>
      {lightItems.map((item, index) => (
        <img className='menu-item' key={index} src={item} alt={`Gallery Item ${index}`} />
        ))}
        </div>
        <div className="entrees">
        <h2>Entrees</h2>
      {entrees.map((item, index) => (
        <img className='menu-item' key={index} src={item} alt={`Gallery Item ${index}`} />
        ))}
</div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Menu

