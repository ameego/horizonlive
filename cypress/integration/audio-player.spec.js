/// <reference types="cypress" />

context("Audio player", () => {
  let player = "[data-testid=audio-player]"
  let closeButton = "[data-testid=audio-player-close]"
  let playlistName = "[data-testid=playlist-name]"
  let currentArtistName = ""

  it("visits the page", () => {
    cy.visit("/")
  })

  it("should be shown in artist detail page", () => {
    cy.get("[data-testid=nav-artist] a").click()
    cy.get("[data-testid=artist-link]").eq(0).click()
    cy.get(player).should("be.visible")
    cy.get(closeButton).not("be.visible")
  })

  it("should update player description", () => {
    cy.get(player).contains("Playlist de ")
    cy.get("[aria-label=Play]")
    cy.get(".rhap_play-pause-button").click()
    cy.get("[aria-label=Pause]")
    cy.get("[data-testid=main-title]").then(elem => {
      currentArtistName = elem[0].innerText
      cy.get(playlistName).contains("Vous écoutez " + elem[0].innerText, {
        matchCase: false,
      })
    })
  })

  it("should be shown in other pages once music is played", () => {
    cy.get("[data-testid=nav-home] a").click()
    cy.get(player).should("be.visible")
    cy.get(closeButton).should("be.visible")
  })

  it("should show close button", () => {
    cy.get(closeButton).should("be.visible")
  })

  it("should close audio player", () => {
    cy.get(closeButton).click()
    cy.get(player).not("be.visible")
  })

  it("currently playing playlist should be replaced with new one when visiting other artist", () => {
    cy.get("[data-testid=nav-artist] a").click()
    cy.get("[data-testid=artist-link]").eq(0).click()
    cy.get(".rhap_play-pause-button").click()
    cy.get("[data-testid=nav-artist] a").click()
    cy.get("[data-testid=artist-link]").eq(1).click()
    cy.get("[aria-label=Play]")
    cy.get(playlistName).not("contains", currentArtistName)
    cy.get("[data-testid=main-title]").then(elem => {
      cy.get(playlistName).contains("Playlist de " + elem[0].innerText, {
        matchCase: false,
      })
    })
  })

  it("should not be visible in other pages when not played", () => {
    cy.get("[data-testid=nav-home] a").click()
    cy.get(player).not("be.visible")
  })
})
