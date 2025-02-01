import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Building2 } from "lucide-react";

const dummyProfessionals = [
  { id: 1, name: "Marie Durant", role: "Architecte", company: "Archi Design", contact: "marie@archidesign.fr" },
  { id: 2, name: "Thomas Bernard", role: "BET Structure", company: "IngeConsult", contact: "t.bernard@ingeconsult.fr" },
  { id: 3, name: "Laurent Petit", role: "Construction", company: "BâtiPro", contact: "l.petit@batipro.fr" },
  { id: 4, name: "Sophie Martin", role: "Architecte d'intérieur", company: "Design Plus", contact: "s.martin@designplus.fr" },
];

const Professionals = () => {
  const { t } = useLanguage();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-2">
        <Building2 className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Professionnels Partenaires</h1>
      </div>
      <ScrollArea className="h-[calc(100vh-10rem)]">
        <div className="grid gap-4">
          {dummyProfessionals.map((pro) => (
            <Card key={pro.id}>
              <CardHeader>
                <CardTitle className="text-xl">{pro.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">{pro.role}</p>
                  <p>{pro.company}</p>
                  <p>{pro.contact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Professionals;