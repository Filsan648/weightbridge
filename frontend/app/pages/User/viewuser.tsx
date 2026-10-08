"use client"

import * as React from "react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"

import { Badge } from "../../components/ui/badge"
import { Separator } from "../../components/ui/separator"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"

interface User {
  id: number
  name: string
  email: string
  telephone: string
  derniere_connexion: string
}

interface ViewUserProps {
  user: User | undefined
}

export function ViewUser({ user }: ViewUserProps) {
  const [isEditing, setIsEditing] = React.useState(false)

  const [formData, setFormData] = React.useState<User | undefined>(
    user
  )

  /*
   * Met à jour le formulaire lorsque l'utilisateur change
   */
  React.useEffect(() => {
    setFormData(user)
  }, [user])

  /*
   * Utilisateur introuvable
   */
  if (!user || !formData) {
    return (
      <Card className="w-full">
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground">
            Utilisateur introuvable.
          </p>
        </CardContent>
      </Card>
    )
  }

  /*
   * Modifier
   */
  const handleEdit = () => {
    setFormData(user)
    setIsEditing(true)
  }

  /*
   * Annuler
   */
  const handleCancel = () => {
    setFormData(user)
    setIsEditing(false)
  }

  /*
   * Enregistrer
   */
  const handleSave = () => {
    console.log("Utilisateur modifié :", formData)

    // Plus tard :
    // await updateUser(formData)

    setIsEditing(false)
  }

  return (
    <Card className="w-full">

      {/* Header */}
      <CardHeader className="flex flex-row items-center justify-between">

        <CardTitle>
          Informations utilisateur
        </CardTitle>

        {!isEditing ? (
          <Button
            variant="outline"
            onClick={handleEdit}
          >
            Modifier
          </Button>
        ) : (
          <div className="flex gap-2">

            <Button
              variant="outline"
              onClick={handleCancel}
            >
              Annuler
            </Button>

            <Button onClick={handleSave}>
              Enregistrer
            </Button>

          </div>
        )}

      </CardHeader>

      <CardContent className="space-y-6">

        {/* Profil */}
        <div className="flex items-center gap-4">

          {/* Avatar */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted text-xl font-semibold">
            {user.name.charAt(0).toUpperCase()}
          </div>

          {/* Nom + Email */}
          <div>

            <h3 className="text-lg font-semibold">
              {user.name}
            </h3>

            <p className="text-sm text-muted-foreground">
              {user.email}
            </p>

          </div>

        </div>

        <Separator />

        {/* Informations */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

          {/* Nom */}
          <div className="space-y-2">

            <p className="text-sm text-muted-foreground">
              Nom complet
            </p>

            {isEditing ? (
              <Input
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              />
            ) : (
              <p className="font-medium">
                {user.name}
              </p>
            )}

          </div>

          {/* Email */}
          <div className="space-y-2">

            <p className="text-sm text-muted-foreground">
              Email
            </p>

            {isEditing ? (
              <Input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
              />
            ) : (
              <p className="font-medium">
                {user.email}
              </p>
            )}

          </div>

          {/* Téléphone */}
          <div className="space-y-2">

            <p className="text-sm text-muted-foreground">
              Téléphone
            </p>

            {isEditing ? (
              <Input
                type="tel"
                value={formData.telephone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    telephone: e.target.value,
                  })
                }
              />
            ) : (
              <p className="font-medium">
                {user.telephone}
              </p>
            )}

          </div>

          {/* Dernière connexion */}
          <div className="space-y-2">

            <p className="text-sm text-muted-foreground">
              Dernière connexion
            </p>

            <p className="font-medium">
              {user.derniere_connexion}
            </p>

          </div>

        </div>

        <Separator />

        {/* ID utilisateur */}
        <div className="space-y-2">

          <p className="text-sm text-muted-foreground">
            Identifiant utilisateur
          </p>

          <Badge variant="outline">
            #{user.id}
          </Badge>

        </div>

      </CardContent>
    </Card>
  )
}