

// const { Api, JsonRpc, RpcError, JsSignatureProvider } = require('eosjs');
// const fetch = require('node-fetch');                            // node only; not needed in browsers
// const { TextDecoder, TextEncoder } = require('text-encoding');  // node, IE11 and IE Edge Browsers

// import { Api, JsonRpc, RpcError, JsSignatureProvider } from 'eosjs';

// not working because of es5
// var eosjs = require('eosjs');
// var Api = eosjs.Api
// var JsSignatureProvider = eosjs.JsSignatureProvider

// const defaultPrivateKey = "5JKXY61vpDDCKKM2GSY5z59ZrXbE3m3bj1Qzzk3BGvaF4jaKbUt"; // user casey
// const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);

// const fetch = require('node-fetch');                            // node only; not needed in browsers
// const { TextDecoder, TextEncoder } = require('text-encoding');  // node, IE11 and IE Edge Browsers

//player 1 priv key 5JY7GfA1kfJgo4CjFyM5tLwv4RAFQibiGh8KVAmkWQ2eiyo7Z3z
//casey priv key 5JpzL7QUQ6J3Ty9RpATTfWqFyK2ud9wJ89EMPc4BeDxny43asz2
//priv key of whoever is signing, sending the fox
var defaultPrivateKey = "5JY7GfA1kfJgo4CjFyM5tLwv4RAFQibiGh8KVAmkWQ2eiyo7Z3z"; // priv key for casey
var rpc = new eosjs_jsonrpc.default('http://127.0.0.1:7777');
var signatureProvider = new eosjs_jssig.default([defaultPrivateKey]);
var api = new eosjs_api.default({ rpc: rpc, signatureProvider: signatureProvider });


var textures = "/textures/"
var instructions = document.querySelector('#blocker')
var images = document.querySelector('#images')
var buyButton = document.querySelector('#buyBtn')
var message = document.querySelector('#middleMessage')
var createSelect = require('voxel-select')
var highlight = require('voxel-highlight')
var transforms = require('voxel-transforms')
var player = require('voxel-player')
var fly = require('voxel-fly')
var toolbar = require('toolbar')

var game = require('voxel-hello-world')({
  materials: [
    ['grass', 'dirt', 'grass_dirt'],
    'brick',
    'grass',
    // 'obsidian',
    // 'plank',
    // 'whitewool'
  ],
  texturePath: textures,
  playerSkin: textures + 'fox1_skin.png', //fox1_skin.png
  foxSkin: textures + 'fox1_skin.png',
  interactElement: instructions,
  container: document.querySelector('#left'),
  statsDisabled: true
}, setup)

function setup(game, avatar) {
  
  var makeFly = fly(game)
  makeFly(game.controls.target())

  var currentMaterial = 1

  toolbar('.bar-tab').on('select', function(item) {
    currentMaterial = item
  })
  
  avatar.position.copy({x: 2, y: 6, z: 4})
  
  var select = createSelect(game)
  window.sel = select
  
  var blockPosPlace, blockPosErase
  var hl = game.highlighter = highlight(game, { color: 0x000000, distance: 100 })
  hl.on('highlight', function (voxelPos) { blockPosErase = voxelPos })
  hl.on('remove', function (voxelPos) { blockPosErase = null })
  hl.on('highlight-adjacent', function (voxelPos) { blockPosPlace = voxelPos })
  hl.on('remove-adjacent', function (voxelPos) { blockPosPlace = null })
  hl.on('highlight-deselect', function(pos) {
    select.reset()
    select.set(pos.start, pos.end, true)
    var bounds = select.bounds()
    switch (dropdown.value) {
      case 'overlay': return select.transform(transforms.overlay(currentMaterial))
      case 'walls': return transforms.walls(game, bounds[0], bounds[1], currentMaterial)
      case 'erase': return select.transform(transforms.erase)
      case 'move': return transforms.move(game, bounds[0], bounds[1], [0, 5, 0])
      case 'replace': return select.transform(transforms.replace(currentMaterial, 1))
      case 'fill': return select.transform(transforms.replace(currentMaterial, 0))
      case 'deselect': return select.reset()
      case 'nothing': return
    }
  })

  var shiftDown = false

  window.addEventListener('keydown', function (ev) {
    if (ev.keyCode === 16) shiftDown = true
    if (ev.keyCode === 'R'.charCodeAt(0)) avatar.toggle()
    if (ev.keyCode === 13) shutter()
    if (ev.keyCode === 88) setCamera()
  })

  window.addEventListener('keyup', function (ev) {
    if (ev.keyCode === 16) shiftDown = false
  })
  
  var dropdown = document.querySelector('select')
  
  game.on('fire', function (target, state) {
    var select = game.controls.state.select
    if (shiftDown && select) return game.controls.state.select = false
    if (shiftDown && !select) return game.controls.state.select = true
    
    var position = blockPosPlace
    if (position) {
      game.createBlock(position, currentMaterial)
    } else {
      position = blockPosErase
      if (position) game.setBlock(position, 0)
    }
  })
}

message.innerHTML = "Click to play!"
if (game.notCapable()) instructions.style.visibility = 'hidden'

game.interact.on('attain', function() { instructions.style.visibility = 'hidden' })
game.interact.on('release', function() { instructions.style.visibility = 'visible' })

$('.items').on('click', function () {
  console.log($('#' + event.target.id).parent())
  console.log('quick buy item clicked')

//  debugger
})

//buy market items on click
$('.market-items.items').on('click', function () {
  console.log('item being bought')
  document.querySelector('#buy-modal-container').style.display = 'block'; 
})

$('#marketPlace').on('click', function () {
  console.log('showing marketplace')
   $('.market-wrapper').show()
})

$('#x-buy-modal').on('click', function () {
  console.log('hiding modal')
  $('#buy-modal-container').hide()
})

$('#x-market').on('click', function () {
  console.log('hiding wrapper')
  $('.market-wrapper').hide()
})
buyButton.addEventListener('click', function(e) {
  console.log('BUYING ITEM ON CHAIN')
  //buy item with selected class
  try {
     Promise.resolve('foo') // remove when working
    //ON CHAIN TRANSACTION
    // api.transact({
    //   actions: [{
    //     account: 'casey',
    //     name: 'transfer',
    //     authorization: [{
    //       actor: 'player1', //casey 
    //       permission: 'active', //active
    //     }],
    //     data: {
    //       from: 'player1', // who holds smart contract
    //       to: 'casey', // account/wallet to get fox
    //       quantity: '1 FOX', //'1.0000 FOX'
    //       name: 'SNEAKY FOX',
    //       memo: ''
    //     }
    //   }]
    // }, {
    // blocksBehind: 3,
    // expireSeconds: 30, })
    .then(function () {
      document.querySelector('#buy-modal-container').style.display = 'block'; 

      setTimeout(function() {
          $("#modal-loading").hide()
          $('#modal-text').css('display', 'flex');
          $('#modal-text').show()
      }, 1500);
      // change avatar to fox
      // var createPlayer = player(game)
      // var avatar2 = createPlayer(textures + 'fox1_skin.png')
      // avatar2.possess()
      // avatar = avatar2

      //get_table_row
      console.log('BOUGHT ITEM')

    })
  } catch (e) {
    console.log('\nCaught exception: ' + e);
    if (e instanceof RpcError) {
      console.log(JSON.stringify(e.json, null, 2));
    }
  }

})

$('.item').on('click', function(item) {
  $('.item').removeClass('selected')
  $(this).addClass('selected')
})


function setCamera() {
  var els = game.camera.matrixWorld.elements
  var pos = {x: els[12], y: els[13], z: els[14]}
  stop.cam.position.copy(pos)
  stop.cam.lookAt(new game.THREE.Vector3(0,0,-1).applyMatrix4(game.camera.matrixWorld))
}

function shutter() {
  var imageURI = stopMotion.shutter()
  var img = new Image()
  img.src = imageURI
  images.appendChild(img)
}

var stopMotion = require('voxel-stop-motion')(game)
window.stop = stopMotion
window.game = game

stopMotion.cam.position.y = 7
stopMotion.cam.position.z = 10
stop.cam.rotation.x = -0.125

